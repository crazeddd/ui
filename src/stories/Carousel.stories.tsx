import type { Meta, StoryObj } from 'storybook-solidjs-vite'
import { Carousel } from '../components/Carousel'

const meta = { title: 'Components/Carousel', component: Carousel } satisfies Meta<typeof Carousel>
export default meta
type Story = StoryObj<typeof meta>
export const Looping: Story = { args: { items: [] }, render: () => <Carousel loop items={[<div class="gallery__slide"><strong>01</strong><p>A calm place to start.</p></div>, <div class="gallery__slide"><strong>02</strong><p>Small primitives, composed freely.</p></div>, <div class="gallery__slide"><strong>03</strong><p>Ready for your product language.</p></div>]} /> }
