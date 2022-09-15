export type HSV = { h: number; s: number; v: number };
export type HSL = { h: number; s: number; l: number };
export type vector2 = { x: number; y: number };
export type RGBA = { r: number; g: number; b: number; a: number };
export type RGB = { r: number; g: number; b: number };
export type HEX = string;

export interface ColorSet {
  hsv: HSV;
  hsl: HSL;
  hex: HEX;
  rgba: RGBA;
  rgb: RGB;
}
