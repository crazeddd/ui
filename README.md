# @crazeddd/ui

An extremely opinionated SolidJS component library that also comes with a full CSS util library.


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
import { Button, Input } from "@crazeddd/ui";
import "@crazeddd/ui/styles.css";

export function Example() {
  return <Button variant="secondary">Save</Button>;
}
```