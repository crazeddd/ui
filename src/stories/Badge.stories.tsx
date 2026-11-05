import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Badge } from '../components/Badge'

const meta = { title: 'Components/Badge', component: Badge, args: { children: 'Primary' }, argTypes: { variant: { control: 'select', options: ['primary', 'secondary', 'outline', 'danger', 'safe'] } } } satisfies Meta<typeof Badge>
export default meta
type Story = StoryObj<typeof meta>
export const Primary: Story = {}
export const Statuses: Story = { render: () => <div style={{ display: 'flex', gap: '8px', 'flex-wrap': 'wrap' }}><Badge>Primary</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="danger">Danger</Badge><Badge variant="safe">Safe</Badge></div> }
