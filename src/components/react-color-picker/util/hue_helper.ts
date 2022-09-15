import { move } from "./move_cursor";

export const calculateHue = (
  e: React.MouseEvent | MouseEvent,
  container: HTMLDivElement
) => {
  const { width, height, left, top } = container.getBoundingClientRect();
  const position = move(e, width, height, left, top);
  return (position.x / width) * 360;
};
