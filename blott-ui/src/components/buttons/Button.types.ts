import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from "react";

interface CommonButtonBaseProps {
  variant?: "primary" | "transparent" | "outlined" | "secondary" | "default";
  fit?: boolean;
  overrideStyles?: string;
  loading?: boolean;
  width?: string;
  height?: string;
  disabled?: boolean;
}

export interface ButtonAsLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    CommonButtonBaseProps {
  href: string;
  type?: never;
}

export interface ButtonAsButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    CommonButtonBaseProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
}

export type ButtonProps =
  | (ButtonAsLinkProps & { children: ReactNode })
  | (ButtonAsButtonProps & { children: ReactNode });

export type ButtonStory = {
  args: ButtonProps;
  name?: string;
};
