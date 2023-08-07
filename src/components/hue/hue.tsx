import React, { useContext, useRef } from "react";
import { hueContainer, hueCursor } from "./hue.style";
import { Helpers } from "../../utils/helper";
import { ColorContext } from "../../colorPicker";

export const Hue = () => {
  const { colors, onUpdateHsva } = useContext(ColorContext);

  const hue = colors.hsv.h;
  const hueRef = useRef<HTMLDivElement>(null);
  const huePosition = (hue / 360) * 100;

  const updateHue = (e: MouseEvent) => {
    if (!hueRef || !hueRef.current) return;
    onUpdateHsva({ ...colors.hsv, h: Helpers.calculateHue(e, hueRef.current) });
  };

  const handleHueMouseDown = (e: React.MouseEvent) => {
    updateHue(e.nativeEvent);
    document.addEventListener("mousemove", updateHue);
    document.addEventListener("mouseup", handleHueMouseUp);
  };

  const handleHueMouseUp = (e: MouseEvent) => {
    document.removeEventListener("mousemove", updateHue);
    document.removeEventListener("mouseup", handleHueMouseUp);
  };

  return (
    <div className={hueContainer} ref={hueRef} onMouseDown={handleHueMouseDown}>
      <div
        className={hueCursor}
        style={{
          left: huePosition + "%",
          backgroundColor: `hsl(${hue}, 100%, 50%)`,
        }}
      ></div>
    </div>
  );
};
