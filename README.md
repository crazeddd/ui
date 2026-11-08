# @crazeddd/ui

My UI Library, built with SolidJs and Font Awesome.

Comes with premade components and a CSS util library.

## Todo
- [ ] Add Graphs with GraphJs
- [ ] Add Data Tables and Charts
- [ ] Navbar?
- [ ] Progress Bar
- [ ] Slider


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

## Websites Using This UI

- [Kibi Host](https://kibihost.com)