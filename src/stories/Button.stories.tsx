import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../components/Button";

const meta = {
  title: "Components/Button",
  component: Button,
  args: { children: "Continue" },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "danger"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary" } };
export const Loading: Story = { args: { loading: true } };
