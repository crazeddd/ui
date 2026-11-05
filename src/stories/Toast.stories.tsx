import { createSignal } from 'solid-js'
import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Button } from '../components/Button'
import { Toast } from '../components/Toast'

const meta = { title: 'Components/Toast', component: Toast, args: { children: 'Your preferences are up to date.', title: 'Changes saved', variant: 'safe' }, argTypes: { variant: { control: 'select', options: ['default', 'danger', 'safe'] } } } satisfies Meta<typeof Toast>
export default meta
type Story = StoryObj<typeof meta>
export const Safe: Story = {}
export const Dismissible: Story = { render: () => { const [visible, setVisible] = createSignal(true); return visible() ? <Toast title="Saved" dismissible onDismiss={() => setVisible(false)}>Dismiss this notification to test the interaction.</Toast> : <Button variant="outline" onClick={() => setVisible(true)}>Show toast</Button> } }
export const Danger: Story = { args: { title: 'Something went wrong', variant: 'danger', children: 'We could not save your changes.' } }
