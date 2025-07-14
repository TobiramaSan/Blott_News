import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";
import { within, expect } from "@storybook/test";
const meta: Meta<typeof ErrorMessage> = {
  title: "Components/ErrorMessage",
  component: ErrorMessage,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="min-h-[150px] bg-white dark:bg-black p-6 flex items-center justify-center">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: {
    message: "Something went wrong while fetching your data.",
  },
};

export const LongMessage: Story = {
  args: {
    message:
      "Unable to complete your request due to a network timeout. Please check your internet connection and try again. If the problem persists, contact support.",
  },
};

export const DarkMode: Story = {
  args: {
    message: "You do not have the required permissions to access this page.",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const DefaultWithTest: Story = {
  ...Default,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole("alert")).toBeInTheDocument();
    await expect(canvas.getByText("Something went wrong")).toBeInTheDocument();
  },
};
