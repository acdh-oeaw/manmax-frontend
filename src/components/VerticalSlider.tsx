import "./VerticalSlider.css";

export interface VerticalSliderProps {
  /** Minimum selectable value. Default 0. */
  min?: number;
  /** Maximum selectable value. Default 100. */
  max?: number;
  /** Step size for drag snapping and keyboard input. Default 1. */
  step?: number;
  /** Current value — owned by the parent. */
  value: number;
  /** Called with the next value on every change. */
  onChange?: (value: number) => void;
  /** Px height of the track. Default 240. */
  height?: number;
  /** aria-label override for the thumb. */
  label?: string;
}

function clamp(value: number, lo: number, hi: number): number {
  return Math.min(hi, Math.max(lo, value));
}

function roundToStep(value: number, step: number, min: number): number {
  return min + Math.round((value - min) / step) * step;
}

/**
 * Controlled vertical single-value slider for SolidJS 2.0.
 *
 * The parent owns the value: pass a reactive `value` (from a signal,
 * e.g. `value={amount()}`) and update it in `onChange`. The component
 * keeps no internal state — every read comes straight from `props.value`,
 * so it always reflects whatever else is driving that signal. `props.value`
 * is read lazily through a small accessor function (never destructured)
 * so Solid's reactivity keeps tracking it correctly.
 */
export default function VerticalSlider(props: VerticalSliderProps) {
  const min = () => props.min ?? 0;
  const max = () => props.max ?? 100;
  const step = () => props.step ?? 1;
  const height = () => props.height ?? 240;

  const value = () => props.value;

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
  const startDrag = (e: PointerEvent) => {
    const el = e.currentTarget as HTMLDivElement;
    el.setPointerCapture(e.pointerId);

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
    const big = (max() - min()) / 10;
    let delta = 0;
    if (e.key === "ArrowUp" || e.key === "ArrowRight") delta = step();
    else if (e.key === "ArrowDown" || e.key === "ArrowLeft") delta = -step();
    else if (e.key === "PageUp") delta = big;
    else if (e.key === "PageDown") delta = -big;
    else if (e.key === "Home") delta = min() - value();
    else if (e.key === "End") delta = max() - value();
    else return;

    e.preventDefault();
    const next = clamp(roundToStep(value() + delta, step(), min()), min(), max());
    props.onChange?.(next);
  };

  return (
    <div class="v-slider h-full" style={{ height: `${height()}px` }}>
      <div class="v-slider__track" ref={trackRef}>
        <div class="v-slider__fill" style={{ height: `${percent(value())}%` }} />
        <div
          class="v-slider__thumb"
          role="slider"
          tabIndex={0}
          aria-orientation="vertical"
          aria-valuemin={min()}
          aria-valuemax={max()}
          aria-valuenow={value()}
          aria-label={props.label ?? "Value"}
          style={{ bottom: `${percent(value())}%` }}
          onPointerDown={startDrag}
          onKeyDown={onKeyDown}
        />
      </div>
    </div>
  );
}
