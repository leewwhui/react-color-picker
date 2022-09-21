import React, { FC, useRef } from "react";
import {saturationCursor, saturationContainer} from './saturation.style';
import { HSVA } from "../types";
import { calculateHSV } from "../util/saturation_helper";
import { ColorModel } from "../colorModel";

interface SaturationInterface {
  hsv: HSVA;
  onChange: (hsv: HSVA) => void;
}

export const Saturation: FC<SaturationInterface> = (props) => {
  const { hsv, onChange } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const rgb = ColorModel.toColorSet(hsv).rgba;

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
      className={saturationContainer}
      style={{
        backgroundColor: `hsl(${hsv.h}, 100%, 50%)`,
      }}
      onMouseDown={handleMouseDown}
    >
      <div
        className={saturationCursor}
        style={{
          backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          left: saturationPosition.x + "%",
          top: saturationPosition.y + "%",
        }}
      />
    </div>
  );
};
