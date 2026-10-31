import { splitProps, type Component, type JSX } from 'solid-js'

export type CardProps = JSX.HTMLAttributes<HTMLDivElement>
export const Card: Component<CardProps> = (props) => {
  const [local, cardProps] = splitProps(props, ['class', 'children'])
  return <div {...cardProps} class={`ui-card${local.class ? ` ${local.class}` : ''}`}>{local.children}</div>
}
