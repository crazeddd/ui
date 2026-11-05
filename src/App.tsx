import { createSignal } from 'solid-js'
import { Accordion, AccordionItem, Badge, Button, Card, Carousel, Checkbox, Input, Modal, Select, Textarea, Toast } from './components'

function App() {
    const [modalOpen, setModalOpen] = createSignal(false)
    const [toastVisible, setToastVisible] = createSignal(true)

    return (
        <main class="gallery">
            <header class="gallery__header">
                <div>
                    <p class="eyebrow">@crazeddd/ui</p>
                    <h1>Component library</h1>
                    <p class="lede">A small set of SolidJS primitives with the example project’s dark, purple visual language.</p>
                </div>
                <Badge variant="safe">Ready to use</Badge>
            </header>

            <section class="gallery__grid" aria-label="Component examples">
                <Card class="gallery__card gallery__card--wide">
                    <div class="gallery__card-heading"><div><p class="eyebrow">Actions</p><h2>Buttons and badges</h2></div><Badge variant="outline">5 variants</Badge></div>
                    <div class="gallery__row"><Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="danger">Danger</Button><Button variant="safe">Safe</Button></div>
                    <div class="gallery__row"><Badge>Primary</Badge><Badge variant="secondary">Secondary</Badge><Badge variant="outline">Outline</Badge><Badge variant="danger">Danger</Badge><Badge variant="safe">Safe</Badge></div>
                </Card>

                <Card class="gallery__card">
                    <div class="gallery__card-heading"><div><p class="eyebrow">Fields</p><h2>Form controls</h2></div></div>
                    <div class="gallery__stack"><Input label="Email" type="email" placeholder="you@example.com" /><Select label="Role" options={[{ value: 'designer', label: 'Designer' }, { value: 'engineer', label: 'Engineer' }, { value: 'writer', label: 'Writer' }]} /><Textarea label="Notes" placeholder="Leave a short note..." /><Checkbox label="Send me occasional updates" checked /></div>
                </Card>

                <Card class="gallery__card">
                    <div class="gallery__card-heading"><div><p class="eyebrow">Disclosure</p><h2>Accordion</h2></div></div>
                    <Accordion>
                        <AccordionItem title="What is included?" defaultOpen><p>Accessible primitives, CSS tokens, and a small set of useful interaction patterns.</p></AccordionItem>
                        <AccordionItem title="Can I customize the theme?"><p>Override the CSS variables from your application stylesheet without changing the component API.</p></AccordionItem>
                        <AccordionItem title="Is Tailwind required?"><p>No. The library ships with regular CSS and keeps the spacing helpers internal.</p></AccordionItem>
                    </Accordion>
                </Card>

                <Card class="gallery__card">
                    <div class="gallery__card-heading"><div><p class="eyebrow">Feedback</p><h2>Toast</h2></div></div>
                    {toastVisible() ? <Toast variant="safe" title="Changes saved" dismissible onDismiss={() => setToastVisible(false)}>Your preferences are up to date.</Toast> : <Button variant="outline" onClick={() => setToastVisible(true)}>Show toast</Button>}
                </Card>

                <Card class="gallery__card">
                    <div class="gallery__card-heading"><div><p class="eyebrow">Overlay</p><h2>Modal</h2></div></div>
                    <p>Escape closes it, and clicking the backdrop closes it too.</p>
                    <Button onClick={() => setModalOpen(true)}>Open modal</Button>
                    <Modal open={modalOpen()} title="A focused moment" onClose={() => setModalOpen(false)}><p>This dialog uses a portal, semantic dialog attributes, and keyboard dismissal.</p><Button onClick={() => setModalOpen(false)}>Done</Button></Modal>
                </Card>

                <Card class="gallery__card gallery__card--wide">
                    <div class="gallery__card-heading"><div><p class="eyebrow">Content</p><h2>Carousel</h2></div><Badge variant="secondary">3 slides</Badge></div>
                    <Carousel items={[<div class="gallery__slide"><strong>01</strong><p>A calm place to start.</p></div>, <div class="gallery__slide"><strong>02</strong><p>Small primitives, composed freely.</p></div>, <div class="gallery__slide"><strong>03</strong><p>Ready for your product language.</p></div>]} loop />
                </Card>
            </section>
        </main>
    )
}

export default App
