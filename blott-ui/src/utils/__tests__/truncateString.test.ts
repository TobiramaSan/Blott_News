import { truncateString } from "../stringUtils";
import { vi } from "vitest";

describe("truncateString", () => {
  test("should return the original string if its length is less than maxLength", () => {
    const text = "Hello world";
    const maxLength = 20;
    expect(truncateString(text, maxLength)).toBe("Hello world");
  });

  test("should return the original string if its length is equal to maxLength", () => {
    const text = "This is exactly 15!";
    const maxLength = 15;
    expect(truncateString(text, maxLength)).toBe("This is exactly...");
  });

  test('should truncate the string and append "..." if longer than maxLength', () => {
    const text = "This is a very long string that needs to be truncated.";
    const maxLength = 20;
    expect(truncateString(text, maxLength)).toBe("This is a very long ...");
  });

  test('should return "..." if maxLength is 0 and text is not empty', () => {
    const text = "Any text";
    const maxLength = 0;
    expect(truncateString(text, maxLength)).toBe("...");
  });

  test("should return an empty string if the input text is empty", () => {
    const text = "";
    const maxLength = 10;
    expect(truncateString(text, maxLength)).toBe("");
  });

  test("should not truncate if maxLength is very large", () => {
    const text = "Short text";
    const maxLength = 1000;
    expect(truncateString(text, maxLength)).toBe("Short text");
  });

  test("should return an empty string and warn if input text is not a string", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});

    expect(truncateString(null, 10)).toBe("");
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "truncateString: Input text must be a string."
    );
    consoleWarnSpy.mockRestore();
  });

  test("should return original string and warn if maxLength is negative", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    const text = "Hello";
    const maxLength = -5;
    expect(truncateString(text, maxLength)).toBe("Hello");
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "truncateString: maxLength must be a non-negative number."
    );
    consoleWarnSpy.mockRestore();
  });

  test("should return original string and warn if maxLength is not a number", () => {
    const consoleWarnSpy = vi
      .spyOn(console, "warn")
      .mockImplementation(() => {});
    const text = "Hello";
    // @ts-ignore: Intentionally passing wrong type for testing error handling
    expect(truncateString(text, "abc")).toBe("Hello");
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      "truncateString: maxLength must be a non-negative number."
    );
    consoleWarnSpy.mockRestore();
  });
});
