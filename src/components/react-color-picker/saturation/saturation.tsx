import React, { FC, useRef } from "react";
import { HSV } from "../types";
import { hsv2rgb } from "../util/convert";
import { calculateHSV } from "../util/saturation_helper";
import styles from "./saturation.module.less";

interface SaturationInterface {
  hsv: HSV;
  onChange: (hsv: HSV) => void;
}

export const Saturation: FC<SaturationInterface> = (props) => {
  const { hsv, onChange } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const rgb = hsv2rgb(hsv);
  const saturationPosition = { x: hsv.s, y: 100 - hsv.v };

  const handleOnChange = (e: React.MouseEvent | MouseEvent) => {
    if (!containerRef || !containerRef.current) return;
    onChange(calculateHSV(e, containerRef.current, hsv));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleOnChange(e);
    document.addEventListener("mousemove", handleOnChange, false);
    document.addEventListener("mouseup", handleMouseUp, false);
  };

  const handleMouseUp = (e: MouseEvent) => {
    handleOnChange(e);
    document.removeEventListener("mousemove", handleOnChange, false);
    document.removeEventListener("mouseup", handleMouseUp, false);
  };

  return (
    <div
      ref={containerRef}
      className={styles["color-saturation-container"]}
      style={{
        backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className={styles["color-picker-saturation_cursor"]}
        style={{
          backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          left: saturationPosition.x + "%",
          top: saturationPosition.y + "%",
        }}
      />
    </div>
  );
};
