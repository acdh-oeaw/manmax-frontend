/**
 * createCosmographGraph.ts
 *
 * A SolidJS primitive (rather than a component) for Cosmograph. You own the
 * container <div> and its ref; this function creates the Cosmograph
 * instance inside it, uploads your initial data, and hands back reactive
 * setters plus imperative pass-throughs for the graph.
 *
 * This mirrors the "createX" convention used by solid-primitives — it
 * composes into your own component instead of rendering one for you, so you
 * stay in control of the surrounding markup (loading states, overlays,
 * other Cosmograph UI like CosmographSearch that needs the same container).
 *
 * Install:
 *   npm install @cosmograph/cosmograph
 *
 * Usage:
 *
 *   function Graph() {
 *     let containerEl!: HTMLDivElement
 *
 *     const graph = createCosmographGraph(
 *       () => containerEl,
 *       [{ id: 'a' }, { id: 'b' }],
 *       [{ source: 'a', target: 'b' }],
 *       { config: { pointColor: '#4B7BFF', linkWidth: 1 } },
 *     )
 *
 *     // reactive: replaces the whole dataset and re-uploads it
 *     graph.setPoints([{ id: 'a' }, { id: 'b' }, { id: 'c' }])
 *
 *     // imperative: cheaper incremental update, no full re-upload
 *     graph.addPoints([{ id: 'd' }])
 *     graph.fitView()
 *
 *     // anything not wrapped here is available on the raw instance
 *     graph.instance()?.selectPoint(2)
 *
 *     return <div ref={containerEl} style={{ width: '100%', height: '600px' }} />
 *   }
 *
 * Note on sizing: Cosmograph fills its container element, so the container
 * (or its parent) needs real dimensions — a 100%-sized div inside an
 * unconstrained parent will collapse to 0×0.
 */

import {
  Cosmograph,
  prepareCosmographData,
  type CosmographConfig,
  type CosmographDataPrepConfig,
} from '@cosmograph/cosmograph'
import { type Accessor, createEffect, createSignal, onCleanup, untrack } from 'solid-js'

export type CosmographPoint = Record<string, unknown>
export type CosmographLink = Record<string, unknown>

export interface CreateCosmographGraphOptions {
  /** Field on each point object holding its unique id. Default: `'id'`. */
  pointIdBy?: string
  /** Field on each link object holding the source point id. Default: `'source'`. */
  linkSourceBy?: string
  /** Field on each link object holding the target point id. Default: `'target'`. */
  linkTargetBy?: string
  /** Initial (and, via `setConfig`, ongoing) display/behavior config. */
  config?: CosmographConfig
  /** Called if data preparation or a config/data update throws. */
  onError?: (error: unknown) => void
}

export interface CosmographGraphControls {
  /** Reactive accessor for the underlying Cosmograph instance — `undefined` until the container is mounted. */
  instance: Accessor<Cosmograph | undefined>
  /** Replace all point data and re-upload it into the graph. */
  setPoints: (points: CosmographPoint[]) => void
  /** Replace all link data and re-upload it into the graph. */
  setLinks: (links: CosmographLink[]) => void
  /** Merge new display/behavior config into the graph without re-uploading data. */
  setConfig: (config: CosmographConfig) => Promise<void>
  /** Append points without re-uploading the existing dataset. */
  addPoints: (points: CosmographPoint[]) => Promise<void>
  /** Append links without re-uploading the existing dataset. */
  addLinks: (links: CosmographLink[]) => Promise<void>
  /** Remove points by internal index (fastest); optionally keep their links (default: removes them too). */
  removePointsByIndices: (indices: number[], removeLinks?: boolean) => Promise<void>
  /** Remove points by id. */
  removePointsByIds: (ids: string[]) => Promise<void>
  /** Remove links by [sourceId, targetId] pairs. */
  removeLinksByPointIdPairs: (pairs: [string, string][]) => Promise<void>
  /** Remove links by [sourceIndex, targetIndex] pairs (fastest). */
  removeLinksByPointIndicesPairs: (pairs: [number, number][]) => Promise<void>
  /** Center and zoom the view to fit all points. */
  fitView: (duration?: number, padding?: number) => Promise<void>
  /** Destroy the Cosmograph instance early. Also happens automatically on owner cleanup. */
  destroy: () => void
}

export function createCosmographGraph(
  container: Accessor<HTMLElement | null | undefined>,
  initialPoints: CosmographPoint[],
  initialLinks: CosmographLink[] = [],
  options: CreateCosmographGraphOptions = {},
): CosmographGraphControls {
  const [instance, setInstance] = createSignal<Cosmograph>()
  const [pointsSignal, setPointsSignal] = createSignal(initialPoints)
  const [linksSignal, setLinksSignal] = createSignal(initialLinks)

  // Cache of the last successfully prepared (Arrow-backed) points/links so
  // config-only updates don't need to redo data prep and can't accidentally
  // wipe the data out of the graph config.
  let preparedPoints: unknown
  let preparedLinks: unknown

  // Guards against a slower, stale prepareCosmographData() call resolving
  // after a newer one has already started, and clobbering fresher data.
  let requestId = 0

  // Plain (non-reactive) flag guarding one-time instance creation. Using a
  // signal read for this guard instead would make the creation effect
  // subscribe to its own `instance` write and re-fire itself once, uselessly.
  let created = false

  // Resolves once the Cosmograph instance exists, so pass-through methods
  // called immediately after this function returns (before the container
  // has mounted) queue instead of throwing on `undefined`.
  let resolveReady!: () => void
  const readyPromise = new Promise<void>((resolve) => {
    resolveReady = resolve
  })

  async function loadData(points: CosmographPoint[], links: CosmographLink[]) {
    const inst = instance()
    if (!inst) return
    const thisRequest = ++requestId

    const dataConfig: CosmographDataPrepConfig = {
      points: { pointIdBy: options.pointIdBy ?? 'id' },
      ...(links.length
        ? {
            links: {
              linkSourceBy: options.linkSourceBy ?? 'source',
              linkTargetsBy: [options.linkTargetBy ?? 'target'],
            },
          }
        : {}),
    }

    try {
      const prepared = await prepareCosmographData(dataConfig, points, links)
      if (!prepared || thisRequest !== requestId || !instance()) return

      preparedPoints = prepared.points
      preparedLinks = prepared.links

      await inst.setConfig({
        ...prepared.cosmographConfig,
        ...options.config,
        points: preparedPoints,
        links: preparedLinks,
      })
    } catch (error) {
      options.onError?.(error)
    }
  }

  // Create the instance as soon as the container is available. Only tracks
  // `container` — points/links are read untracked, since the ongoing sync
  // effect below already owns reacting to those.
  createEffect(() => {
    const el = container()
    if (!el || created) return
    created = true
    const inst = new Cosmograph(el, options.config ?? {})
    setInstance(inst)
    resolveReady()
    const [points, links] = untrack(() => [pointsSignal(), linksSignal()] as const)
    void loadData(points, links)
  })

  onCleanup(() => {
    instance()?.destroy()
  })

  // Re-upload data whenever setPoints/setLinks is called. `defer: true`
  // skips the redundant run bundled with the container-mount effect above.
  createEffect(

      () => ([pointsSignal, linksSignal]),
      ([points, links]) => {
        if (instance()) void loadData(points(), links())
      },
      { defer: true },
    )

  async function withInstance<T>(fn: (inst: Cosmograph) => T): Promise<T> {
    await readyPromise
    return fn(instance()!)
  }

  return {
    instance,
    setPoints: (points) => setPointsSignal(points),
    setLinks: (links) => setLinksSignal(links),
    setConfig: async (config) => {
      const inst = instance()
      if (!inst) return
      try {
        await inst.setConfig({ points: preparedPoints, links: preparedLinks, ...config })
      } catch (error) {
        options.onError?.(error)
      }
    },
    addPoints: (points) => withInstance((inst) => inst.addPoints(points)),
    addLinks: (links) => withInstance((inst) => inst.addLinks(links)),
    removePointsByIndices: (indices, removeLinks) =>
      withInstance((inst) => inst.removePointsByIndices(indices, removeLinks)),
    removePointsByIds: (ids) => withInstance((inst) => inst.removePointsByIds(ids)),
    removeLinksByPointIdPairs: (pairs) => withInstance((inst) => inst.removeLinksByPointIdPairs(pairs)),
    removeLinksByPointIndicesPairs: (pairs) => withInstance((inst) => inst.removeLinksByPointIndicesPairs(pairs)),
    fitView: (duration, padding) => withInstance((inst) => inst.fitView(duration, padding)),
    destroy: () => instance()?.destroy(),
  }
}
