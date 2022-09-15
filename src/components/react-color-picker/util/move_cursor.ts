import { vector2 } from "..";

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
