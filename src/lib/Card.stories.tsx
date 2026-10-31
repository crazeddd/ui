import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Card } from './Card'

const meta = { title: 'Components/Card', component: Card, render: (args) => <Card {...args}><h2>Project summary</h2><p>A quiet surface for grouped content.</p></Card> } satisfies Meta<typeof Card>
export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = { args: { style: { padding: '24px', 'max-width': '360px' } } }
