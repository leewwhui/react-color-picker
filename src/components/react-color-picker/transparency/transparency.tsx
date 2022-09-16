import React, { FC, useRef } from "react";
import { HSVA } from "../types";
import { calculateTransparency } from "../util/transparency_helper";
import styles from "./transparency.module.less";

interface TransparentInterface {
  hsv: HSVA;
  onTransparencyChange: (transparent: number) => void;
}

export const Transparent: FC<TransparentInterface> = (props) => {
  const { hsv, onTransparencyChange } = props;
  const transparentRef = useRef<HTMLDivElement>(null);

  const { h, a } = hsv;

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
          backgroundImage: `linear-gradient(to right, transparent, hsl(${h}, 100%, 50%))`,
        }}
      ></div>

      <div
        className={styles["color-picker-transparency_cursor"]}
        style={{
          left: a * 100 + "%",
        }}
      >
        <div
          style={{
            backgroundColor: `hsla(${h}, 100%, 50%, ${a})`,
          }}
        />
      </div>
    </div>
  );
};
