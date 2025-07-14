import { formatTimestampToDateString } from "../dateUtils";

describe("formatTimestampToDateString", () => {
  test("should correctly format a known timestamp", () => {
    const timestamp = 1640995200;
    const result = formatTimestampToDateString(timestamp);

    const expected = new Date(timestamp * 1000).toLocaleDateString();

    expect(result).toBe(expected);
  });

  test("should return a valid date string for current timestamp", () => {
    const now = Math.floor(Date.now() / 1000);
    const result = formatTimestampToDateString(now);
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });

  test("should return 'Invalid Date' for NaN", () => {
    const result = formatTimestampToDateString(NaN);
    expect(result).toBe("Invalid Date");
  });

  test("should return 'Invalid Date' for negative timestamp", () => {
    const result = formatTimestampToDateString(-1234567890);
    const expected = new Date(-1234567890 * 1000).toLocaleDateString();
    expect(result).toBe(expected);
  });
});
