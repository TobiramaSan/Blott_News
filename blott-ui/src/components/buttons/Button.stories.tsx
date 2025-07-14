import Button from "./Button";
import { Meta } from "@storybook/react";
import { ButtonStory } from "./Button.types";

const ButtonMeta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export const Story: ButtonStory = {
  args: { variant: "primary", fit: true, children: "Sign up" },
  name: "Button",
};
export default ButtonMeta;
