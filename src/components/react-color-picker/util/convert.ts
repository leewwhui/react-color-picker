import convert from "color-convert";
import { HEX } from "color-convert/conversions";
import tinycolor from "tinycolor2";
import { HSL, HSV, HSVA, RGB, RGBA } from "../types";

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

export const convertToColorSet = (
  data: HSV | HSL | RGB | RGBA | HEX | HSVA
) => {
  const color = tinycolor(data);
  const rgb = color.toRgb();
  const hex = color.toHex();
  const hsv = color.toHsv();

  const transparency = Math.ceil(hsv.a);
  return {
    hex,
    hsv: {
      h: hsv.h,
      s: hsv.s * 100,
      v: hsv.v * 100,
      a: transparency,
    },
    rgb: {
      ...rgb,
      a: transparency,
    },
  };
};

export const convertHSVA2RGBA = (hsva: HSVA) => {
  const { h, s, v, a } = hsva;
  const rgb = tinycolor({ h, s, v }).toRgb();
  rgb.a = a;
  return rgb;
};
