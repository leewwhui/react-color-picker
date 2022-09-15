import tinycolor from "tinycolor2";
import convert from "color-convert";
import { hsvType } from "..";

export const convertHexToHsv = (color: string): hsvType => {
  const hsv = convert.hex.hsv(color);
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
  };
};

export function hsv2rgb({ h, s, v }: hsvType): {
  r: number;
  g: number;
  b: number;
} {
  const rgb = convert.hsv.rgb([h, s, v]);
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
  };
}
