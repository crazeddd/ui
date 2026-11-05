import { splitProps, type Component, type JSX } from 'solid-js'
import { Icon } from './Icon'

export type CheckboxProps = JSX.InputHTMLAttributes<HTMLInputElement> & { label: string }

export const Checkbox: Component<CheckboxProps> = (props) => {
    const [local, inputProps] = splitProps(props, ['label', 'class'])
    return <label class="ui-checkbox"><input {...inputProps} class={`ui-checkbox__control${local.class ? ` ${local.class}` : ''}`} type="checkbox" /><span class="ui-checkbox__box" aria-hidden="true"><Icon icon="check" /></span><span>{local.label}</span></label>
}
