import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Accordion, AccordionItem } from "../components/Accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  render: () => (
    <Accordion>
      <AccordionItem title="What is included?" defaultOpen>
        <p>
          Accessible primitives, CSS tokens, and useful interaction patterns.
        </p>
      </AccordionItem>
      <AccordionItem title="Can I customize the theme?">
        <p>Override the CSS variables from your application stylesheet.</p>
      </AccordionItem>
      <AccordionItem title="Is Tailwind required?">
        <p>No. The library ships with regular CSS.</p>
      </AccordionItem>
    </Accordion>
  ),
};
