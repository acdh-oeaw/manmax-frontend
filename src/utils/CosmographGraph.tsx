/**
 * CosmographGraph.tsx
 *
 * A SolidJS wrapper around `@cosmograph/cosmograph` (the framework-agnostic
 * build of Cosmograph v2 — there's no official Solid adapter, only React).
 * It creates a single Cosmograph instance on mount, uploads whatever
 * `points`/`links` you pass in, and re-uploads or reconfigures the graph
 * whenever those props change, using Solid's fine-grained reactivity
 * instead of a virtual-DOM diff.
 *
 * Built against Solid 2.0's stable core primitives (createSignal,
 * createEffect, onMount, onCleanup, on) — these are unchanged by 2.0's
 * async/Suspense rework, so this also works unmodified on Solid 1.x.
 * Data loading is handled with plain async functions rather than 2.0's new
 * Promise-aware computations, since suspending the whole tree while the
 * graph's data uploads isn't what you want here — the canvas should mount
 * immediately and update in place.
 *
 * Install:
 *   npm install @cosmograph/cosmograph
 *
 * Usage:
 *
 *   import { createSignal } from 'solid-js'
 *   import { CosmographGraph } from './CosmographGraph'
 *   import type { Cosmograph } from '@cosmograph/cosmograph'
 *
 *   const [points, setPoints] = createSignal([{ id: 'a' }, { id: 'b' }])
 *   const [links, setLinks] = createSignal([{ source: 'a', target: 'b' }])
 *   let graph: Cosmograph | undefined
 *
 *   <div style={{ width: '100%', height: '600px' }}>
 *     <CosmographGraph
 *       points={points()}
 *       links={links()}
 *       config={{ pointColor: '#4B7BFF', linkWidth: 1 }}
 *       ref={(instance) => (graph = instance)}
 *     />
 *   </div>
 *
 *   // later, from an event handler etc — this re-renders the graph:
 *   setPoints((prev) => [...prev, { id: 'c' }])
 *
 *   // or drive the graph directly via the exposed instance, e.g. for
 *   // incremental updates that skip a full re-upload:
 *   await graph?.addPoints([{ id: 'd' }])
 *   graph?.fitView()
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
} from "@cosmograph/cosmograph";
import {
  createEffect,
  createSignal,
  on,
  onCleanup,
  onMount,
  onSettled,
  type JSX,
} from "solid-js";

export type CosmographPoint = Record<string, unknown>;
export type CosmographLink = Record<string, unknown>;

export interface CosmographGraphProps {
  /** Point/node records. Each one needs a unique id field (see `pointIdBy`). */
  points: CosmographPoint[];
  /** Link/edge records connecting points by id (see `linkSourceBy`/`linkTargetBy`). */
  links?: CosmographLink[];
  /** Field on each point object holding its unique id. Default: `'id'`. */
  pointIdBy?: string;
  /** Field on each link object holding the source point id. Default: `'source'`. */
  linkSourceBy?: string;
  /** Field on each link object holding the target point id. Default: `'target'`. */
  linkTargetBy?: string;
  /**
   * Any other Cosmograph display/behavior config (colors, sizes, simulation
   * params, event callbacks, etc). Applied on top of the data on every
   * update, so it can change independently of `points`/`links` without
   * triggering a re-upload.
   */
  config?: CosmographConfig;
  /**
   * Called with the live Cosmograph instance once it's created, and again
   * with `undefined` right before it's destroyed. Use this to drive the
   * imperative API (fitView, addPoints, selectPoint, ...) from outside.
   */
  ref?: (instance: Cosmograph | undefined) => void;
  /** Called if data preparation or a config update throws. */
  onError?: (error: unknown) => void;
  class?: string;
  style?: JSX.CSSProperties;
}

const DEFAULT_STYLE: JSX.CSSProperties = { width: "100%", height: "100%" };

export function CosmographGraph(props: CosmographGraphProps) {
  let containerEl: HTMLDivElement | undefined;
  let instance: Cosmograph | undefined;

  // Cache of the last successfully prepared (Arrow-backed) points/links so
  // config-only updates — e.g. a new pointColor — don't need to redo data
  // prep, and don't accidentally wipe the data out of the graph config.
  let preparedPoints: unknown;
  let preparedLinks: unknown;

  // Guards against a slower, stale prepareCosmographData() call resolving
  // after a newer one has already started, and clobbering fresher data.
  let requestId = 0;

  const [ready, setReady] = createSignal(false);

  async function loadData(points: CosmographPoint[], links: CosmographLink[]) {
    if (!instance) return;
    const thisRequest = ++requestId;

    const dataConfig: CosmographDataPrepConfig = {
      points: { pointIdBy: props.pointIdBy ?? "id" },
      ...(links.length
        ? {
            links: {
              linkSourceBy: props.linkSourceBy ?? "source",
              linkTargetsBy: [props.linkTargetBy ?? "target"],
            },
          }
        : {}),
    };

    try {
      const prepared = await prepareCosmographData(dataConfig, points, links);
      // Bail if we've unmounted, or a newer loadData() call has since started.
      if (!prepared || thisRequest !== requestId || !instance) return;

      preparedPoints = prepared.points;
      preparedLinks = prepared.links;

      await instance.setConfig({
        ...prepared.cosmographConfig,
        ...props.config,
        points: preparedPoints,
        links: preparedLinks,
      });
    } catch (error) {
      props.onError?.(error);
    }
  }

  onSettled(() => {
    instance = new Cosmograph(containerEl!, props.config ?? {});
    props.ref?.(instance);
    setReady(true);
    void loadData(props.points, props.links ?? []);
  });

  onCleanup(() => {
    props.ref?.(undefined);
    instance?.destroy();
    instance = undefined;
  });

  // Re-upload data whenever the data itself (or the id/source/target field
  // mapping) changes. `defer: true` skips a redundant run on mount, since
  // onMount already triggers the initial load.
  createEffect(
    () =>
      [
        props.points,
        props.links,
        props.pointIdBy,
        props.linkSourceBy,
        props.linkTargetBy,
      ] as const,
    ([points, links]) => {
      if (!ready()) return;
      void loadData(points, links ?? []);
    },
    { defer: true },
  );

  // Apply display/behavior config changes without re-uploading data.
  createEffect(
    () => props.config,
    (config) => {
      if (!ready() || !instance) return;
      instance
        .setConfig({
          points: preparedPoints,
          links: preparedLinks,
          ...config,
        })
        .catch((error) => props.onError?.(error));
    },
    { defer: true },
  );

  return (
    <div
      ref={containerEl}
      class={props.class}
      style={props.style ?? DEFAULT_STYLE}
    />
  );
}
