import {
  Show,
  createEffect,
  createUniqueId,
  onCleanup,
  splitProps,
  type Component,
  type ParentProps,
} from "solid-js";
import { Portal } from "solid-js/web";
import { Icon } from "./Icon";

export type ModalProps = ParentProps<{
  open: boolean;
  title: string;
  onClose: () => void;
  class?: string;
  closeOnOverlayClick?: boolean;
}>;

export const Modal: Component<ModalProps> = (props) => {
  const [local, modalProps] = splitProps(props, [
    "open",
    "title",
    "onClose",
    "children",
    "class",
    "closeOnOverlayClick",
  ]);
  const titleId = createUniqueId();
  createEffect(() => {
    if (!local.open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") local.onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    onCleanup(() => document.removeEventListener("keydown", handleKeyDown));
  });
  return (
    <Show when={local.open}>
      <Portal>
        <div
          class="ui-modal"
          role="presentation"
          onClick={(event) => {
            if (
              event.target === event.currentTarget &&
              local.closeOnOverlayClick !== false
            )
              local.onClose();
          }}
        >
          <section
            {...modalProps}
            class={`ui-modal__content${local.class ? ` ${local.class}` : ""}`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <header class="ui-modal__header">
              <h2 id={titleId}>{local.title}</h2>
              <button
                class="ui-modal__close"
                type="button"
                aria-label="Close dialog"
                onClick={local.onClose}
              >
                <Icon icon="xmark" />
              </button>
            </header>
            <div class="ui-modal__body">{local.children}</div>
          </section>
        </div>
      </Portal>
    </Show>
  );
};
