import type { Meta, StoryObj } from "@storybook/react";
import Loading from "./Loading";

const meta: Meta<typeof Loading> = {
  title: "Components/LoadingSpinner",
  component: Loading,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-full h-[300px] bg-white dark:bg-black p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const CenteredInPage: Story = {
  decorators: [
    (Story) => (
      <div className="h-screen flex justify-center items-center bg-gray-50 dark:bg-zinc-900">
        <Story />
      </div>
    ),
  ],
};
