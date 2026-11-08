import { createUniqueId, splitProps, type Component, type JSX } from "solid-js";

export type SelectOption = { label: string; value: string };
export type SelectProps = Omit<
  JSX.SelectHTMLAttributes<HTMLSelectElement>,
  "children"
> & { label: string; options: SelectOption[]; hint?: string; error?: string };

export const Select: Component<SelectProps> = (props) => {
  const [local, selectProps] = splitProps(props, [
    "label",
    "options",
    "hint",
    "error",
    "id",
    "class",
  ]);
  const generatedId = createUniqueId();
  const selectId = () => local.id ?? `select-${generatedId}`;
  const messageId = () => `${selectId()}-message`;
  return (
    <label class="ui-select-field" for={selectId()}>
      <span class="ui-input-label">{local.label}</span>
      <select
        {...selectProps}
        id={selectId()}
        class={`ui-select${local.class ? ` ${local.class}` : ""}`}
        aria-invalid={local.error ? "true" : undefined}
        aria-describedby={local.hint || local.error ? messageId() : undefined}
      >
        {local.options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
      {(local.hint || local.error) && (
        <p
          id={messageId()}
          class={`ui-input-message${local.error ? " ui-input-message--error" : ""}`}
        >
          {local.error ?? local.hint}
        </p>
      )}
    </label>
  );
};
