import { For } from "solid-js";

export interface VerticalTimelineProps<T = unknown> {
  /** Start of the whole timeline (inclusive), as a year. */
  startYear: number;
  /** End of the whole timeline (inclusive), as a year. */
  endYear: number;
  /** Currently selected year — owned by the parent. */
  value: number;
  /** Called with the next year on every change. */
  onChange?: (year: number) => void;
  /** Items grouped by year, e.g. { 1998: [...], 2004: [...] }. */
  items?: Record<number, T[]>;
  /** aria-label override for the thumb. */
  label?: string;
}

// The `top-4`/`bottom-4` and `h-4` classes below all reserve the same
// space (1rem) for the min/max year labels at each end of the track. Every
// column must reserve exactly this much on top and bottom so that all
// three columns share the same 0-100% coordinate frame for their `bottom:
// X%` positioning — otherwise a percent position computed against one
// column's height lands at a different pixel than the same percent
// computed against another column's height, and the misalignment grows
// the further you are from the middle of the track. Tailwind class names
// have to stay as literal strings (not built via template literals) so
// its scanner can find them, so if you change this spacing, update the
// four `top-4`/`bottom-4`/`h-4` occurrences below together.

function clamp(value: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, value));
}

/**
 * Controlled vertical timeline for SolidJS 2.0.
 *
 * The parent owns the selected year: pass a reactive `value` (from a
 * signal, e.g. `value={year()}`) and update it in `onChange`. The
 * component keeps no internal state — every read comes straight from
 * `props`, so it always reflects whatever else is driving that signal.
 * Props are read lazily through small accessor functions (never
 * destructured) so Solid's reactivity keeps tracking them correctly.
 *
 * `startYear`/`endYear` set the range; `items` is an optional
 * `{ year: T[] }` map, rendered as small bars with a length proportional
 * to the item count next to the track for every year that has entries.
 * The earlier year is at the top of the track, the later year at the
 * bottom.
 *
 * The component has no intrinsic height — it fills its containing box
 * (`h-full`), so size it by giving a parent element a height (a fixed
 * height, `h-full` in a sized ancestor, or `flex-1` in a flex column).
 */
export default function VerticalTimeline<T = unknown>(props: VerticalTimelineProps<T>) {
  const lo = () => Math.min(props.startYear, props.endYear);
  const hi = () => Math.max(props.startYear, props.endYear);
  const pageStep = () => Math.max(1, Math.round((hi() - lo()) / 10));

  const clampYear = (year: number) => clamp(Math.round(year), lo(), hi());
  const value = () => clampYear(props.value);

  // Percent measured as distance from the BOTTOM of the track (matches the
  // `bottom` CSS used below). lo() (earlier) -> 100% (top of track),
  // hi() (later) -> 0% (bottom of track), so earlier sits above later.
  const percent = (year: number) => {
    const range = hi() - lo();
    return range === 0 ? 0 : ((hi() - year) / range) * 100;
  };

  const years = () =>
    Object.keys(props.items ?? {})
      .map(Number)
      .filter((y) => y >= lo() && y <= hi())
      .sort((a, b) => a - b);

  let trackRef: HTMLDivElement | undefined;

  const valueFromClientY = (clientY: number): number => {
    const rect = trackRef?.getBoundingClientRect();
    // If the track hasn't been measured yet, or its containing box
    // resolved to zero height, bail out to the current value instead of
    // dividing by zero — a NaN written into a `bottom`/`height` style is
    // silently ignored by the browser, which freezes elements in place
    // rather than erroring visibly.
    if (!rect || rect.height === 0) return value();
    // Distance down from the top of the track (top = earlier year).
    const ratio = clamp((clientY - rect.top) / rect.height, 0, 1);
    return clampYear(lo() + ratio * (hi() - lo()));
  };

  // Pointer capture keeps move/up events targeted at this element even when
  // the cursor leaves it mid-drag, so no window-level listeners are needed.
  // Attached to the whole hit area (not just the thumb), so pressing
  // anywhere on the track jumps there and immediately continues the drag.
  const startDrag = (e: PointerEvent) => {
    const el = e.currentTarget as HTMLDivElement;
    el.setPointerCapture(e.pointerId);
    props.onChange?.(valueFromClientY(e.clientY));

    const move = (ev: PointerEvent) => {
      props.onChange?.(valueFromClientY(ev.clientY));
    };

    const up = (ev: PointerEvent) => {
      el.releasePointerCapture(ev.pointerId);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    let delta = 0;
    if (e.key === "ArrowUp" || e.key === "ArrowRight") delta = 1;
    else if (e.key === "ArrowDown" || e.key === "ArrowLeft") delta = -1;
    else if (e.key === "PageUp") delta = pageStep();
    else if (e.key === "PageDown") delta = -pageStep();
    else if (e.key === "Home") delta = lo() - value();
    else if (e.key === "End") delta = hi() - value();
    else return;

    e.preventDefault();
    props.onChange?.(clampYear(value() + delta));
  };

  return (
    <div class="inline-flex h-full items-stretch gap-3">
      {/* current year, tracks the thumb */}
      <div class="relative h-full w-10">
        <div class="absolute inset-x-0 top-4 bottom-4">
          <div
            class="absolute left-2 translate-y-1/2 rounded bg-green-600 px-1.5 py-0.5 text-xs font-medium text-white shadow-sm"
            style={{ bottom: `${percent(value())}%` }}
          >
            {value()}
          </div>
        </div>
      </div>

      {/* track */}
      <div class="relative flex h-full flex-col items-center">
        <span class="flex h-4 items-center text-[10px] text-neutral-400">{lo()}</span>
        <div class="relative w-1.5 flex-1 rounded-full bg-neutral-200" ref={trackRef}>
          <div
            class="absolute bottom-0 left-0 w-full rounded-full bg-green-500"
            style={{ height: `${percent(value())}%` }}
          />
          {/* larger, touch-friendly hit area centered on the thin track */}
          <div
            class="absolute inset-y-0 left-1/2 w-8 -translate-x-1/2 cursor-pointer touch-none"
            onPointerDown={startDrag}
          >
            <div
              class="absolute left-1/2 h-5 w-5 -translate-x-1/2 translate-y-1/2 cursor-grab rounded-full border-2 border-green-600 bg-white shadow-md active:cursor-grabbing"
              role="slider"
              tabIndex={0}
              aria-orientation="vertical"
              aria-valuemin={lo()}
              aria-valuemax={hi()}
              aria-valuenow={value()}
              aria-label={props.label ?? "Year"}
              style={{ bottom: `${percent(value())}%` }}
              onKeyDown={onKeyDown}
            />
          </div>
        </div>
        <span class="flex h-4 items-center text-[10px] text-neutral-400">{hi()}</span>
      </div>

      {/* per-year item counts — a short bar, left-anchored, whose width
          is proportional to the item count for that year */}
      <div class="relative h-full w-16">
        <div class="absolute inset-x-0 top-4 bottom-4">
          <For each={years()}>
            {(year) => (
              <div
                class="absolute left-0 flex translate-y-1/2 items-center gap-1.5"
                style={{ bottom: `${percent(year)}%` }}
              >
                <div
                  class={[
                    "h-3 flex-none rounded-sm",
                    { "bg-green-600": year === value(), "bg-slate-600": year !== value() },
                  ]}
                  style={{ width: `${props.items![year].length}px` }}
                />
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
}
