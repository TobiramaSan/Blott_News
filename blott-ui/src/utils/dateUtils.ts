/**
 * Formats a Unix timestamp (in seconds) into a localized date string.
 * @param timestamp The Unix timestamp in seconds.
 * @returns A formatted date string.
 */
export const formatTimestampToDateString = (timestamp: number): string => {
  return new Date(timestamp * 1000).toLocaleDateString();
};
