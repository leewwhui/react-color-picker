import convert from "color-convert";
import { HEX } from "color-convert/conversions";
import tinycolor from "tinycolor2";
import { HSL, HSV, RGB, RGBA } from "../types";

export const convertHexToHsv = (color: string): HSV => {
  const hsv = convert.hex.hsv(color);
  return {
    h: hsv[0],
    s: hsv[1],
    v: hsv[2],
  };
};

export function hsv2rgb({ h, s, v }: HSV): RGB {
  const rgb = convert.hsv.rgb([h, s, v]);
  return {
    r: rgb[0],
    g: rgb[1],
    b: rgb[2],
  };
}

export const convertToColorSet = (data: HSV | HSL | RGB | RGBA | HEX) => {
  const color = tinycolor(data);
  const rgb = color.toRgb();
  const hex = color.toHex();
  const hsv = color.toHsv();
  return {
    hex,
    hsv: { h: hsv.h, s: Math.floor(hsv.s * 100), v: Math.floor(hsv.v * 100) },
    rgb,
  };
};
