import { HEX } from "../types";
import { move } from "./move_cursor";

export const calculateHue = (
  e: React.MouseEvent | MouseEvent,
  container: HTMLDivElement
) => {
  const { width, height, left, top } = container.getBoundingClientRect();
  const position = move(e, width, height, left, top);
  return (position.x / width) * 360;
};

export const isValidateHex = (hex: HEX) => {
  const hexPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
  return hexPattern.test(hex);
};
