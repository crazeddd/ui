import { splitProps, type Component, type JSX } from "solid-js";
import Spinner from "./Spinner";

export type ButtonVariant =
  "primary" | "secondary" | "outline" | "danger" | "safe";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
};

export const Button: Component<ButtonProps> = (props) => {
  const [local, buttonProps] = splitProps(props, [
    "class",
    "variant",
    "size",
    "loading",
    "children",
  ]);
  const variant = () => local.variant ?? "primary";
  const size = () => local.size ?? "md";
  return (
    <button
      {...buttonProps}
      class={`ui-button ui-button--${variant()} ui-button--${size()}${local.class ? ` ${local.class}` : ""}`}
      disabled={local.loading || buttonProps.disabled}
      aria-busy={local.loading ? "true" : undefined}
    >
      {local.loading ? <Spinner /> : local.children}
    </button>
  );
};
