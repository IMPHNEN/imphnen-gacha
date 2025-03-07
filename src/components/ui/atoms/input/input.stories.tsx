import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Large: Story = {
  args: {
    size: "lg",
    placeholder: "Placeholder",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    placeholder: "Placeholder",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    placeholder: "Placeholder",
  },
};
