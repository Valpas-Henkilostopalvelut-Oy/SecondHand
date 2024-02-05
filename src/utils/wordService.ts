export const trimStringToNChars = (
  str: string | null | undefined,
  n: number
): string => {
  if (str === null || str === undefined) {
    return "";
  }
  return str.length > n ? str.substring(0, n) + "..." : str;
};

export const trimStringToNWords = (
  str: string | null | undefined,
  n: number
): string => {
  if (str === null || str === undefined) {
    return "";
  }

  const words = str.split(/\s+/); // Split string into words using whitespace as separator
  if (words.length <= n) {
    return str;
  }

  return words.slice(0, n).join(" ") + "...";
};
