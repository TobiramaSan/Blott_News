import type { Meta, StoryObj } from "@storybook/react";
import NewsCard from "./NewsCard";
import { NewsItem } from "@/api/finnhub";

const meta: Meta<typeof NewsCard> = {
  title: "Components/NewsCard",
  component: NewsCard,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="p-4 max-w-[600px] bg-white dark:bg-black">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof NewsCard>;

const sampleItem: NewsItem = {
  id: 1,
  category: "general",
  datetime: Date.now() / 1000,
  headline: "Apple releases groundbreaking AI product to compete with OpenAI",
  image: "https://placehold.co/600x400",
  source: "Bloomberg",
  summary: "This is a short summary of the Apple product release...",
  url: "https://bloomberg.com/apple-ai-release",
};

export const Default: Story = {
  args: {
    item: sampleItem,
  },
};

export const NoImage: Story = {
  args: {
    item: {
      ...sampleItem,
      image: "",
    },
  },
};

export const LongHeadline: Story = {
  args: {
    item: {
      ...sampleItem,
      headline:
        "This is a very long headline meant to test how the text truncation behaves on small and large screens",
    },
  },
};
