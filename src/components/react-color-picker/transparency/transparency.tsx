import React, { FC, useRef } from "react";
import { calculateTransparency } from "../util/transparency_helper";
import styles from "./transparency.module.less";

interface TransparentInterface {
  hue: number;
  transparency: number;
  onTransparencyChange: (transparent: number) => void;
}

export const Transparent: FC<TransparentInterface> = (props) => {
  const { hue, transparency, onTransparencyChange } = props;
  const transparentRef = useRef<HTMLDivElement>(null);

  const updateTransparency = (e: React.MouseEvent | MouseEvent) => {
    if (!transparentRef || !transparentRef.current) return;
    onTransparencyChange(calculateTransparency(e, transparentRef.current));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    updateTransparency(e);
    document.addEventListener("mousemove", updateTransparency);
    document.addEventListener("mouseup", handleHueMouseUp);
  };

  const handleHueMouseUp = (e: MouseEvent) => {
    document.removeEventListener("mousemove", updateTransparency);
    document.removeEventListener("mouseup", handleHueMouseUp);
  };

  return (
    <div
      className={styles["color-picker-transparent"]}
      ref={transparentRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className={styles["color-picker-transparent-hue"]}
        style={{
          backgroundImage: `linear-gradient(to right, transparent, hsl(${hue}, 100%, 50%))`,
        }}
      ></div>

      <div
        className={styles["color-picker-transparency_cursor"]}
        style={{
          backgroundColor: `hsla(${hue}, 100%, 50%, ${transparency})`,
          left: transparency * 100 + "%",
        }}
      />
    </div>
  );
};
