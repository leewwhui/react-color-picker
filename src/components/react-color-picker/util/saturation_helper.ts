import { hsvType, vector2 } from "..";
import { move } from "./move_cursor";

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
