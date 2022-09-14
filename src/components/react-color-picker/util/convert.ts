import tinycolor from "tinycolor2";

export const convertHexToHsv = (color: string) => {
  const { h, s, v } = tinycolor(color).toHsv();
  return { h, s, v };
};
