import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Icon } from "../components/Icon";

const meta = {
  title: "Components/Icon",
  component: Icon,
  args: { icon: "check" },
  argTypes: {
    icon: {
      control: "select",
      options: [
        "arrow-left",
        "arrow-right",
        "check",
        "chevron-down",
        "chevron-up",
        "xmark",
      ],
    },
    size: { control: "select", options: ["xs", "sm", "lg", "xl"] },
  },
} satisfies Meta<typeof Icon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Labeled: Story = { args: { icon: "check", label: "Complete" } };
export const Navigation: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", "font-size": "1.2rem" }}>
      <Icon icon="arrow-left" label="Previous" />
      <Icon icon="arrow-right" label="Next" />
      <Icon icon="xmark" label="Close" />
    </div>
  ),
};
