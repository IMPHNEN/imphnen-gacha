import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: {
      control: "select",
      options: ["text", "number", "email", "password"],
    },
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

export const TextInput: Story = {
  args: {
    size: "md",
    type: "text",
  },
};

export const NumberInput: Story = {
  args: {
    size: "md",
    type: "number",
  },
};

export const EmailInput: Story = {
  args: {
    size: "md",
    type: "email",
  },
};

export const PasswordInput: Story = {
  args: {
    size: "md",
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    size: "md",
    type: "text",
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    size: "md",
    type: "text",
    error: "This field is required",
  },
};
