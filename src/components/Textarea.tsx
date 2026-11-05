import { createUniqueId, splitProps, type Component, type JSX } from 'solid-js'

export type TextareaProps = JSX.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; hint?: string; error?: string }

export const Textarea: Component<TextareaProps> = (props) => {
    const [local, textareaProps] = splitProps(props, ['label', 'hint', 'error', 'id', 'class'])
    const generatedId = createUniqueId()
    const textareaId = () => local.id ?? `textarea-${generatedId}`
    const messageId = () => `${textareaId()}-message`
    return <label class="ui-textarea-field" for={textareaId()}><span class="ui-input-label">{local.label}</span><textarea {...textareaProps} id={textareaId()} class={`ui-textarea${local.class ? ` ${local.class}` : ''}`} aria-invalid={local.error ? 'true' : undefined} aria-describedby={local.hint || local.error ? messageId() : undefined} />{(local.hint || local.error) && <p id={messageId()} class={`ui-input-message${local.error ? ' ui-input-message--error' : ''}`}>{local.error ?? local.hint}</p>}</label>
}
