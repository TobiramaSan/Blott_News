"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import CircularProgress from "../_misc/circular-progress/CircularProgress";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    fit,
    children,
    overrideStyles,
    loading,
    width,
    height,
    href,
    ...buttonProps
  } = props;

  let variantClass = "";
  if (variant === "primary") {
    variantClass = "bg-[#55acee] text-white disabled:opacity-50";
  } else if (variant === "transparent") {
    variantClass = "bg-transparent  text-[#0046BF]";
  } else if (variant === "outlined") {
    variantClass = "bg-transparent border-[#DAD2B8] text-blue border";
  } else if (variant === "secondary") {
    variantClass = "bg-[#002360] text-white";
  } else {
    variantClass = "bg-[#EEEEEE] text-[#444444]";
  }

  const defaultWidthClass = fit ? "max-w-max" : "w-full";
  const defaultHeightClass = "h-fit";
  const baseClasses = `text-sm font-bold flex items-center justify-center gap-2 py-3 px-[100px] rounded-[500px] cursor-pointer`;
  const dimensionClasses =
    (width ? "w-" + width : defaultWidthClass) +
    " " +
    (height ? "h-" + height : defaultHeightClass);
  const finalClassName = twMerge(
    baseClasses,
    dimensionClasses,
    variantClass,
    overrideStyles
  );

  const content = loading ? (
    <CircularProgress color="inherit" size={20} className="" />
  ) : (
    <span>{children}</span>
  );

  if (href) {
    const {
      disabled,
      onClick,
      onCopy,
      onCut,
      onPaste,
      onDrag,
      onDragEnd,
      onDragEnter,
      onDragExit,
      onDragLeave,
      onDragOver,
      onDragStart,
      onDrop,
      onScroll,
      onCopyCapture,
      onCutCapture,
      onPasteCapture,
      onDragCapture,
      onDragEndCapture,
      onDragEnterCapture,
      onDragExitCapture,
      onDragLeaveCapture,
      onDragOverCapture,
      onDragStartCapture,
      onDropCapture,
      onScrollCapture,
      ...restLinkProps
    } = buttonProps;

    const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if ((e.key === "Enter" || e.key === " ") && !(loading || disabled)) {
        if (typeof onClick === "function") {
          onClick(e as any);
        }
      } else if (loading || disabled) {
        e.preventDefault();
      }
    };

    return (
      <Link
        href={href}
        className={finalClassName}
        tabIndex={loading || disabled ? -1 : 0}
        aria-disabled={loading || disabled}
        onClick={
          loading || disabled
            ? (e) => e.preventDefault()
            : (onClick as React.MouseEventHandler<HTMLAnchorElement>)
        }
        onKeyDown={handleKeyDown}
        {...restLinkProps}
      >
        {content}
      </Link>
    );
  } else {
    const {
      onCopy,
      onCut,
      onPaste,
      onDrag,
      onDragEnd,
      onDragEnter,
      onDragExit,
      onDragLeave,
      onDragOver,
      onDragStart,
      onDrop,
      onScroll,
      ...buttonOnlyProps
    } = buttonProps;

    return (
      <button
        className={finalClassName}
        disabled={loading || buttonProps.disabled}
        {...buttonOnlyProps}
      >
        {content}
      </button>
    );
  }
};

export default Button;
