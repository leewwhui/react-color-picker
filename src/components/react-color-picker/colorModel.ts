import tinycolor from "tinycolor2";
import { colorEnum, colorPrams, ColorSet } from "./types";

export class ColorModel {
  static toHSVA(color: colorPrams) {}

  static toColorSet(data: colorPrams): ColorSet {
    const color = tinycolor(data);
    const alpha = color.getAlpha();
    color.setAlpha(alpha);

    const rgb = color.toRgb();
    const hex = color.toHex();
    const hsv = color.toHsv();
    const hsl = color.toHsl();

    return {
      hex,
      hsv: {
        ...hsv,
        s: hsv.s * 100,
        v: hsv.v * 100,
      },
      hsl: {
        ...hsl,
        s: hsl.s * 100,
        l: hsl.l * 100,
      },
      rgba: rgb,
    };
  }

  static isColorEqual(source: colorPrams, target: colorPrams) {
    const targetSrc = tinycolor(target).toString();
    const sourceColor = tinycolor(source).toString();

    return targetSrc === sourceColor;
  }

  static getType(color: colorPrams): colorEnum | null {
    const str = tinycolor(color).toString();

    if (str.indexOf("#") !== -1) return colorEnum.HEX;
    else if (str.indexOf("rgb") !== -1) return colorEnum.RGBA;
    else if (str.indexOf("hsv") !== -1) return colorEnum.HSV;
    else if (str.indexOf("hsl") !== -1) return colorEnum.HSL;
    return null;
  }
}
