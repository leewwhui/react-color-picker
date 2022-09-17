export type HSV = { h: number; s: number; v: number };
export type HSVA = { h: number; s: number; v: number; a: number };
export type HSL = { h: number; s: number; l: number };
export type vector2 = { x: number; y: number };
export type RGBA = { r: number; g: number; b: number; a: number };
export type RGB = { r: number; g: number; b: number };
export type HEX = string;

export interface ColorSet {
  hsv: HSVA;
  hex: HEX;
  rgba: RGBA;
}

export type colorPrams = HSV | HSL | RGB | RGBA | HEX;
