import React, { FC, useMemo, useRef } from "react";
import { hsvType } from "..";
import { hsv2rgb } from "../util/convert";
import { calculateHSV } from "../util/saturation_helper";
import styles from "./saturation.module.less";

interface SaturationInterface {
  hsv: hsvType;
  onChange: (hsv: hsvType) => void;
}

export const Saturation: FC<SaturationInterface> = (props) => {
  const { hsv, onChange } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const rgb = hsv2rgb(hsv);

  const hslPosition = useMemo(() => {
    if (!containerRef || !containerRef.current) return { x: 0, y: 0 };
    const { width, height } = containerRef.current.getBoundingClientRect();
    const s = hsv.s;
    const v = hsv.v;
    return { x: (s / 100) * width, y: ((100 - v) / 100) * height };
  }, [hsv.s, hsv.v]);

  const handleOnChange = (e: React.MouseEvent | MouseEvent) => {
    if (!containerRef || !containerRef.current) return;
    onChange(calculateHSV(e, containerRef.current, hsv));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleOnChange(e);
    document.addEventListener("mousemove", handleMouseMove, false);
    document.addEventListener("mouseup", handleMouseUp, false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    handleOnChange(e);
  };

  const handleMouseUp = (e: MouseEvent) => {
    handleOnChange(e);
    document.removeEventListener("mousemove", handleMouseMove, false);
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
          left: hslPosition.x,
          top: hslPosition.y,
        }}
      />
    </div>
  );
};
