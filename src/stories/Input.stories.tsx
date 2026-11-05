import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Input } from '../components/Input'

const meta = { title: 'Components/Input', component: Input, args: { label: 'Project name', placeholder: 'moonlit-dashboard' } } satisfies Meta<typeof Input>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {}
export const WithHint: Story = { args: { hint: 'Use a short, memorable name.' } }
export const WithError: Story = { args: { error: 'That name is already in use.' } }
