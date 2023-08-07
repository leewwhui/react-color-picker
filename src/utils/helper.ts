import { HSVA } from "../types";
import { move } from "./move_cursor";

export class Helpers {
  static calculateHue(e: MouseEvent, container: HTMLDivElement) {
    const { width, height, left, top } = container.getBoundingClientRect();
    const position = move(e, width, height, left, top);
    return (position.x / width) * 360;
  }

  static calculateHSV = (
    e: MouseEvent,
    container: HTMLDivElement,
    hsv: HSVA
  ) => {
    const { left, top, width, height } = container.getBoundingClientRect();
    const position = move(e, width, height, left, top);
    const { x, y } = position;
    const h = hsv.h;
    const s = (x / width) * 100;
    const v = 100 - (y / height) * 100;
    return { h, s, v, a: hsv.a };
  };

  static calculateTransparency = (e: MouseEvent, container: HTMLDivElement) => {
    const { width, height, left, top } = container.getBoundingClientRect();
    const position = move(e, width, height, left, top);
    return position.x / width;
  };
}
