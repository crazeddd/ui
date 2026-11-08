import {
  createSignal,
  For,
  splitProps,
  type Component,
  type JSX,
} from "solid-js";
import { Icon } from "./Icon";

export type CarouselProps = {
  items: JSX.Element[];
  ariaLabel?: string;
  class?: string;
  loop?: boolean;
};

export const Carousel: Component<CarouselProps> = (props) => {
  const [local] = splitProps(props, ["items", "ariaLabel", "class", "loop"]);
  const [index, setIndex] = createSignal(0);
  const lastIndex = () => Math.max(local.items.length - 1, 0);
  const previous = () =>
    setIndex((value) =>
      value === 0 ? (local.loop ? lastIndex() : 0) : value - 1,
    );
  const next = () =>
    setIndex((value) =>
      value === lastIndex() ? (local.loop ? 0 : value) : value + 1,
    );
  return (
    <div
      class={`ui-carousel${local.class ? ` ${local.class}` : ""}`}
      aria-label={local.ariaLabel ?? "Carousel"}
    >
      <div class="ui-carousel__viewport">
        <For each={local.items}>
          {(item, itemIndex) => (
            <div class="ui-carousel__item" hidden={itemIndex() !== index()}>
              {item}
            </div>
          )}
        </For>
      </div>
      <div class="ui-carousel__controls">
        <button
          type="button"
          class="ui-carousel__button"
          onClick={previous}
          disabled={!local.loop && index() === 0}
          aria-label="Previous slide"
        >
          <Icon icon="chevron-left" />
        </button>
        <span class="ui-carousel__counter">
          {index() + 1} / {local.items.length}
        </span>
        <button
          type="button"
          class="ui-carousel__button"
          onClick={next}
          disabled={!local.loop && index() === lastIndex()}
          aria-label="Next slide"
        >
          <Icon icon="chevron-right" />
        </button>
      </div>
    </div>
  );
};
