import { createSignal, Show, splitProps, type Component, type ParentProps } from 'solid-js'
import { Icon } from './Icon'

export type AccordionProps = ParentProps<{ class?: string }>
export type AccordionItemProps = ParentProps<{ title: string; defaultOpen?: boolean; disabled?: boolean }>

export const Accordion: Component<AccordionProps> = (props) => {
    const [local, accordionProps] = splitProps(props, ['class', 'children'])
    return <div {...accordionProps} class={`ui-accordion${local.class ? ` ${local.class}` : ''}`}>{local.children}</div>
}

export const AccordionItem: Component<AccordionItemProps> = (props) => {
    const [local, itemProps] = splitProps(props, ['title', 'defaultOpen', 'disabled', 'children'])
    const [open, setOpen] = createSignal(local.defaultOpen ?? false)
    return (
        <div {...itemProps} class="ui-accordion__item">
            <button class="ui-accordion__trigger" type="button" aria-expanded={open()} disabled={local.disabled} onClick={() => setOpen((value) => !value)}>
                <span>{local.title}</span><Icon class="ui-accordion__icon" icon={open() ? 'chevron-up' : 'chevron-down'} />
            </button>
            <Show when={open()}><div class="ui-accordion__content">{local.children}</div></Show>
        </div>
    )
}
