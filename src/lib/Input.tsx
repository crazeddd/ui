import { createUniqueId, splitProps, type Component, type JSX } from 'solid-js'

export type InputProps = JSX.InputHTMLAttributes<HTMLInputElement> & { label: string; hint?: string; error?: string }

export const Input: Component<InputProps> = (props) => {
  const [local, inputProps] = splitProps(props, ['label', 'hint', 'error', 'id', 'class'])
  const generatedId = createUniqueId()
  const inputId = () => local.id ?? `input-${generatedId}`
  const messageId = () => `${inputId()}-message`
  return (
    <label class="ui-input-field" for={inputId()}>
      <span class="ui-input-label">{local.label}</span>
      <input {...inputProps} id={inputId()} class={`ui-input${local.class ? ` ${local.class}` : ''}`} aria-invalid={local.error ? 'true' : undefined} aria-describedby={local.hint || local.error ? messageId() : undefined} />
      {(local.hint || local.error) && <p id={messageId()} class={`ui-input-message${local.error ? ' ui-input-message--error' : ''}`}>{local.error ?? local.hint}</p>}
    </label>
  )
}
