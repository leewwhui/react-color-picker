import { hsvType, vector2 } from "..";

export const clamp = (value: number, max: number, min: number) => {
  return value > max ? max : value < min ? min : value;
};

export const move = (
  e: React.MouseEvent | MouseEvent,
  width: number,
  height: number,
  left: number,
  top: number
): vector2 => {
  const x = clamp(e.clientX - left, width, 0);
  const y = clamp(e.clientY - top, height, 0);
  return { x, y };
};

export const calculateHSV = (
  e: React.MouseEvent | MouseEvent,
  container: HTMLDivElement,
  hsv: hsvType
) => {
  const { left, top, width, height } = container.getBoundingClientRect();
  const position = move(e, width, height, left, top);
  const { x, y } = position;
  const h = hsv.h;
  const s = (x / width) * 100;
  const v = 100 - (y / height) * 100;
  return { h, s, v };
};
