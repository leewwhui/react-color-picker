export type HSV = { h: number; s: number; v: number };
export type HSVA = { h: number; s: number; v: number; a: number };
export type HSL = { h: number; s: number; l: number };
export type HSLA = { h: number; s: number; l: number; a: number };
export type vector2 = { x: number; y: number };
export type RGBA = { r: number; g: number; b: number; a: number };
export type RGB = { r: number; g: number; b: number };
export type HEX = string;

export enum colorTypes {
  HEX = "hex",
  RGBA = "rgba",
  HSV = "hsv",
  HSL = "hsl",
}

export interface Colors {
  [colorTypes.HSV]: HSVA;
  [colorTypes.HSL]: HSLA;
  [colorTypes.HEX]: HEX;
  [colorTypes.RGBA]: RGBA;
}

export type colorParams = HSV | HSL | RGB | RGBA | HEX | HSVA | HSLA;

export interface ColorPickerProps {
  children?: React.ReactElement[] | React.ReactElement;
  color?: colorParams;
  onChange?: (color: Colors) => void;
}

export interface ColorContextProps {
  colors: Colors;
  onUpdateHsva: (hsva: HSVA) => void;
}
