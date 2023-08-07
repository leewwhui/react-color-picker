import React, { useContext, useRef } from "react";
import { saturationCursor, saturationContainer } from "./saturation.style";
import { Helpers } from "../../utils/helper";
import { ColorContext } from "../../colorPicker";

export const Saturation = () => {
  const { colors, onUpdateHsva } = useContext(ColorContext);
  const containerRef = useRef<HTMLDivElement>(null);

  const { rgba, hsv } = colors;

  const saturationPosition = { x: hsv.s, y: 100 - hsv.v };

  const handleOnChange = (e: MouseEvent) => {
    if (!containerRef || !containerRef.current) return;

    onUpdateHsva(Helpers.calculateHSV(e, containerRef.current, hsv));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleOnChange(e.nativeEvent);
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
          backgroundColor: `rgb(${rgba.r}, ${rgba.g}, ${rgba.b})`,
          left: saturationPosition.x + "%",
          top: saturationPosition.y + "%",
        }}
      />
    </div>
  );
};
