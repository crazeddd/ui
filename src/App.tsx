import { Card, Button, Input } from './lib'

function App() {
  return (
    <main class="showcase">
      <header class="showcase__header">
        <p class="eyebrow">@crazeddd/ui</p>
        <h1>A small, sturdy starting point.</h1>
        <p class="lede">Solid primitives with sensible defaults, tokenized CSS, and room to grow.</p>
      </header>
      <Card class="showcase__panel">
        <div class="showcase__panel-heading">
          <div><p class="eyebrow">Component preview</p><h2>Build your next interface</h2></div>
          <span class="status-dot" aria-label="Ready" />
        </div>
        <div class="showcase__form">
          <Input label="Project name" placeholder="moonlit-dashboard" />
          <Input label="Description" placeholder="A quiet place for important work" />
          <div class="showcase__actions"><Button variant="ghost">Cancel</Button><Button>Continue <span aria-hidden="true">-&gt;</span></Button></div>
        </div>
      </Card>
      <footer class="showcase__footer"><span>SolidJS</span><span aria-hidden="true">/</span><span>TypeScript</span><span aria-hidden="true">/</span><span>CSS variables</span></footer>
    </main>
  )
}

export default App
