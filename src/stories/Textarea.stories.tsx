import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Textarea } from "../components/Textarea";

const meta = {
  title: "Components/Textarea",
  component: Textarea,
  args: { label: "Notes", placeholder: "Leave a short note..." },
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithHint: Story = {
  args: { hint: "Keep it under 280 characters." },
};
export const WithError: Story = {
  args: { error: "Please add a little more detail." },
};
