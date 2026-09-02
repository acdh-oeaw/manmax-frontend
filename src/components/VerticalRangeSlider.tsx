import "./VerticalRangeSlider.css";

export type RangeValue = [number, number];

export interface VerticalRangeSliderProps {
  /** Minimum selectable value. Default 0. */
  min?: number;
  /** Maximum selectable value. Default 100. */
  max?: number;
  /** Step size for drag snapping and keyboard input. Default 1. */
  step?: number;
  /** [low, high] — owned by the parent. */
  value: RangeValue;
  /** Called with the next [low, high] on every change. */
  onChange?: (value: RangeValue) => void;
  /** Px height of the track. Default 240. */
  height?: number;
  /** aria-label override for the low thumb. */
  lowLabel?: string;
  /** aria-label override for the high thumb. */
  highLabel?: string;
}

type Thumb = "low" | "high";

function clamp(value: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, value));
}

function roundToStep(value: number, step: number, min: number): number {
  return min + Math.round((value - min) / step) * step;
}

/**
 * Controlled vertical dual-thumb range slider for SolidJS 2.0.
 *
 * The parent owns the value: pass a reactive `value` (from a signal,
 * e.g. `value={range()}`) and update it in `onChange`. The component
 * keeps no internal copy of low/high — every read comes straight from
 * `props.value`, so it always reflects whatever else is driving that
 * signal. `props.value` is read lazily through small accessor functions
 * (never destructured) so Solid's reactivity keeps tracking it correctly.
 */
export default function VerticalRangeSlider(props: VerticalRangeSliderProps) {
  const min = () => props.min ?? 0;
  const max = () => props.max ?? 100;
  const step = () => props.step ?? 1;
  const height = () => props.height ?? 240;

  const low = () => props.value[0];
  const high = () => props.value[1];

  let trackRef: HTMLDivElement | undefined;

  const percent = (v: number) => ((v - min()) / (max() - min())) * 100;

  const valueFromClientY = (clientY: number): number => {
    const rect = trackRef!.getBoundingClientRect();
    const ratio = clamp((rect.bottom - clientY) / rect.height, 0, 1);
    const raw = min() + ratio * (max() - min());
    return clamp(roundToStep(raw, step(), min()), min(), max());
  };

  // Pointer capture keeps move/up events targeted at the thumb even when
  // the cursor leaves it mid-drag, so no window-level listeners are needed.
  const startDrag = (thumb: Thumb) => (e: PointerEvent) => {
    const el = e.currentTarget as HTMLDivElement;
    el.setPointerCapture(e.pointerId);

    const move = (ev: PointerEvent) => {
      const v = valueFromClientY(ev.clientY);
      if (thumb === "low") {
        props.onChange?.([Math.min(v, high()), high()]);
      } else {
        props.onChange?.([low(), Math.max(v, low())]);
      }
    };

    const up = (ev: PointerEvent) => {
      el.releasePointerCapture(ev.pointerId);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
  };

  const onKeyDown = (thumb: Thumb) => (e: KeyboardEvent) => {
    const big = (max() - min()) / 10;
    let delta = 0;
    if (e.key === "ArrowUp" || e.key === "ArrowRight") delta = step();
    else if (e.key === "ArrowDown" || e.key === "ArrowLeft") delta = -step();
    else if (e.key === "PageUp") delta = big;
    else if (e.key === "PageDown") delta = -big;
    else if (e.key === "Home") delta = thumb === "low" ? min() - low() : min() - high();
    else if (e.key === "End") delta = thumb === "low" ? max() - low() : max() - high();
    else return;

    e.preventDefault();

    if (thumb === "low") {
      const next = clamp(roundToStep(low() + delta, step(), min()), min(), high());
      props.onChange?.([next, high()]);
    } else {
      const next = clamp(roundToStep(high() + delta, step(), min()), low(), max());
      props.onChange?.([low(), next]);
    }
  };

  return (
    <div class="v-range" style={{ height: `${height()}px` }}>
      <div class="v-range__track" ref={trackRef}>
        <div
          class="v-range__fill"
          style={{
            bottom: `${percent(low())}%`,
            height: `${percent(high()) - percent(low())}%`,
          }}
        />
        <div
          class="v-range__thumb"
          role="slider"
          tabindex={0}
          aria-orientation="vertical"
          aria-valuemin={min()}
          aria-valuemax={high()}
          aria-valuenow={low()}
          aria-label={props.lowLabel ?? "Minimum value"}
          style={{ bottom: `${percent(low())}%` }}
          onPointerDown={startDrag("low")}
          onKeyDown={onKeyDown("low")}
        />
        <div
          class="v-range__thumb"
          role="slider"
          tabindex={0}
          aria-orientation="vertical"
          aria-valuemin={low()}
          aria-valuemax={max()}
          aria-valuenow={high()}
          aria-label={props.highLabel ?? "Maximum value"}
          style={{ bottom: `${percent(high())}%` }}
          onPointerDown={startDrag("high")}
          onKeyDown={onKeyDown("high")}
        />
      </div>
    </div>
  );
}
