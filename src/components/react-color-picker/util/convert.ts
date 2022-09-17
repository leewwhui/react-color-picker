import convert from "color-convert";
import { HEX } from "color-convert/conversions";
import tinycolor from "tinycolor2";
import { colorPrams, ColorSet, HSL, HSV, HSVA, RGB, RGBA } from "../types";

export const convert2Rgb = (hsva: HSVA) => {
  const { h, s, v } = hsva;
  return convertToColorSet({ h, s, v }).rgba;
};

export const convertToColorSet = (data: colorPrams): ColorSet => {
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
    rgba: {
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

export const convertHSVA2HEX = (hsva: HSVA) => {
  const { h, s, v, a } = hsva;
  return tinycolor({ h, s, v }).toHex();
};

export const convertHEX2HSVA = (hex: HEX) => {
  return convertToColorSet(hex).hsv;
};

export const convertHSVA2ColorSet = (hsva: HSVA): ColorSet => {
  const { hex, rgba } = convertToColorSet(hsva);
  return {
    hex,
    rgba,
    hsv: hsva,
  };
};

export const isHsvaEqual = (hsva1: HSVA, hsva2: HSVA) => {
  return (
    hsva1.h === hsva2.h &&
    hsva1.s === hsva2.s &&
    hsva1.v === hsva2.v &&
    hsva1.a === hsva2.a
  );
};

export const isColorEqual = (colors: ColorSet, color: colorPrams) => {
  const { hex, rgba, hsv } = colors;
  const colorStr = color.toString();

  return (
    hex.toString() == colorStr ||
    rgba.toString() === colorStr ||
    hsv.toString() === colorStr
  );
};
