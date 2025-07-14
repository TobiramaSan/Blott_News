export const truncateString = (
  text: string | null | undefined,
  maxLength: number
): string => {
  if (typeof text !== "string") {
    console.warn("truncateString: Input text must be a string.");
    return "";
  }
  if (typeof maxLength !== "number" || maxLength < 0) {
    console.warn("truncateString: maxLength must be a non-negative number.");
    return text;
  }

  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
};
