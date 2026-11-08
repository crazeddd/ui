import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Select } from "../components/Select";

const meta = {
  title: "Components/Select",
  component: Select,
  args: {
    label: "Role",
    options: [
      { value: "designer", label: "Designer" },
      { value: "engineer", label: "Engineer" },
      { value: "writer", label: "Writer" },
    ],
  },
} satisfies Meta<typeof Select>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const WithHint: Story = {
  args: { hint: "Choose the role that fits best." },
};
export const WithError: Story = { args: { error: "Please choose a role." } };
