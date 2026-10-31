# @crazeddd/ui

A small SolidJS component library built with Vite, TypeScript, CSS variables, and Storybook. Its default visual language uses the dark charcoal and purple palette from the project reference, with Geist headings and Inter body text loaded from Google Fonts.

## Development

```bash
npm install
npm run dev
```

Run Storybook with:

```bash
npm run storybook
```

Build the package and its declarations with:

```bash
npm run build
```

## Usage

```tsx
import { Button, Input } from '@crazeddd/ui'
import '@crazeddd/ui/styles.css'

export function Example() {
  return <Button variant="secondary">Save</Button>
}
```

The initial public components are `Button`, `Input`, and `Card`. Shared design tokens live in `src/styles.css`, so consumers can override the CSS variables without adopting a utility framework.

The stylesheet also includes a small internal spacing layer based on the reference scale: `--space-1` through `--space-7` map to `0.25rem`, `0.5rem`, `0.75rem`, `1rem`, `1.25rem`, `2rem`, and `4rem`. CSS utilities such as `gp-1`, `pd-1`, and `mg-1` are available to the library surface but are intentionally not JavaScript exports.
