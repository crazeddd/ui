import { splitProps, type Component, type JSX } from "solid-js";

export type BadgeVariant =
  "primary" | "secondary" | "outline" | "danger" | "safe";
export type BadgeProps = JSX.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

export const Badge: Component<BadgeProps> = (props) => {
  const [local, badgeProps] = splitProps(props, [
    "class",
    "variant",
    "children",
  ]);
  const variant = () => local.variant ?? "primary";
  return (
    <span
      {...badgeProps}
      class={`ui-badge ui-badge--${variant()}${local.class ? ` ${local.class}` : ""}`}
    >
      {local.children}
    </span>
  );
};
