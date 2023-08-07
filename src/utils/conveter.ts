import { colorTypes, colorParams, HSVA } from "../types";
import { tinycolor } from "./tinycolor";

export class Conveter {
  static fromHsva(hsva: HSVA) {
    const color = tinycolor(hsva);
    const alpha = color.getAlpha();
    color.setAlpha(alpha);

    const rgb = color.toRgb();
    const hex = color.toHex();
    const hsl = color.toHsl();

    return {
      hex,
      hsv: {
        ...hsva,
      },
      hsl: {
        ...hsl,
        s: hsl.s * 100,
        l: hsl.l * 100,
      },
      rgba: rgb,
    };
  }

  static toHsva(color: colorParams) {
    const colorModule = tinycolor(color);
    const alpha = colorModule.getAlpha();
    colorModule.setAlpha(alpha);
    const hsva = colorModule.toHsv();

    return {
      ...hsva,
      s: hsva.s * 100,
      v: hsva.v * 100,
    };
  }

  static isColorEqual(source: colorParams, target: colorParams) {
    const targetSrc = tinycolor(target).toString();
    const sourceColor = tinycolor(source).toString();
    return targetSrc === sourceColor;
  }

  static getType(color: colorParams): colorTypes | null {
    const str = tinycolor(color).toString();

    if (str.indexOf("#") !== -1) return colorTypes.HEX;
    else if (str.indexOf("rgb") !== -1) return colorTypes.RGBA;
    else if (str.indexOf("hsv") !== -1) return colorTypes.HSV;
    else if (str.indexOf("hsl") !== -1) return colorTypes.HSL;
    return null;
  }
}
