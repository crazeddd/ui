import { createSignal } from "solid-js";
import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";

const meta = { title: "Components/Modal", component: Modal } satisfies Meta<
  typeof Modal
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Interactive: Story = {
  args: { open: false, title: "A focused moment", onClose: () => undefined },
  render: () => {
    const [open, setOpen] = createSignal(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          open={open()}
          title="A focused moment"
          onClose={() => setOpen(false)}
        >
          <p>Escape or the close button dismisses this dialog.</p>
          <Button onClick={() => setOpen(false)}>Done</Button>
        </Modal>
      </>
    );
  },
};
