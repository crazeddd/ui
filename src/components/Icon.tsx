import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faArrowLeft,
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "solid-fontawesome";
import { splitProps, type Component } from "solid-js";

library.add(
  faArrowLeft,
  faArrowRight,
  faCheck,
  faChevronDown,
  faChevronUp,
  faXmark,
);

export type IconName =
  | "arrow-left"
  | "arrow-right"
  | "check"
  | "chevron-down"
  | "chevron-up"
  | "xmark";
export type IconProps = {
  icon: IconName;
  label?: string;
  size?: "xs" | "sm" | "lg" | "xl";
  class?: string;
};

export const Icon: Component<IconProps> = (props) => {
  const [local] = splitProps(props, ["icon", "label", "size", "class"]);
  return (
    <span
      class={`ui-icon${local.class ? ` ${local.class}` : ""}`}
      role={local.label ? "img" : undefined}
      aria-label={local.label}
      aria-hidden={local.label ? undefined : "true"}
    >
      <FontAwesomeIcon icon={local.icon} size={local.size} />
    </span>
  );
};
