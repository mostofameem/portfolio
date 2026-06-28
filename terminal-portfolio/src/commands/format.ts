/** Right-pad a string to a fixed width. */
export const pad = (value: string, width: number): string =>
  value.length >= width ? value : value + " ".repeat(width - value.length);

/** Left-pad. */
export const padStart = (value: string, width: number): string =>
  value.length >= width ? value : " ".repeat(width - value.length) + value;

/** Wrap a single line of text to a max column width. */
export const wrap = (text: string, width: number): string => {
  if (text.length <= width) return text;
  const out: string[] = [];
  let line = "";
  for (const word of text.split(" ")) {
    if ((line + " " + word).trim().length > width) {
      if (line) out.push(line);
      line = word;
    } else {
      line = (line + " " + word).trim();
    }
  }
  if (line) out.push(line);
  return out.join("\n");
};
