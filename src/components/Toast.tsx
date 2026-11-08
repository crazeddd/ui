import { Show, splitProps, type Component, type ParentProps } from "solid-js";
import { Icon } from "./Icon";

export type ToastVariant = "default" | "danger" | "safe";
export type ToastProps = ParentProps<{
  variant?: ToastVariant;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  class?: string;
}>;

export const Toast: Component<ToastProps> = (props) => {
  const [local, toastProps] = splitProps(props, [
    "children",
    "class",
    "variant",
    "title",
    "dismissible",
    "onDismiss",
  ]);
  const variant = () => local.variant ?? "default";
  return (
    <div
      {...toastProps}
      class={`ui-toast ui-toast--${variant()}${local.class ? ` ${local.class}` : ""}`}
      role="status"
    >
      <div class="ui-toast__content">
        <Show when={local.title}>
          <strong>{local.title}</strong>
        </Show>
        <div>{local.children}</div>
      </div>
      <Show when={local.dismissible}>
        <button
          class="ui-toast__dismiss"
          type="button"
          aria-label="Dismiss notification"
          onClick={() => local.onDismiss?.()}
        >
          <Icon icon="xmark" />
        </button>
      </Show>
    </div>
  );
};
