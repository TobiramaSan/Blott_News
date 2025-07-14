import React from "react";
import { twMerge } from "tailwind-merge";
import { CircularProgressProps } from "./CircularProgress.types";

const CircularProgress = ({
  size = 20,
  color = "#FFF",
  className,
  style,
  ...rest
}: CircularProgressProps) => {
  return (
    <span
      {...rest}
      className={twMerge("animate-spin duration-300 icon-loading", className)}
      style={{
        ...style,
        color,
        fontSize: `${size}px`,
      }}
    />
  );
};

export default CircularProgress;
