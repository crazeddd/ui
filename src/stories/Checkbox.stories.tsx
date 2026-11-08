import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Checkbox } from "../components/Checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: { label: "Send me occasional updates" },
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Unchecked: Story = {};
export const Checked: Story = { args: { checked: true } };
export const Disabled: Story = { args: { disabled: true } };
