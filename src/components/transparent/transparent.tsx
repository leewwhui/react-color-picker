import React, { useContext, useRef } from "react";
import {
  transparencyContainer,
  transparencyCursor,
  transparencyHue,
} from "./transparent.style";
import { Helpers } from "../../utils/helper";
import { ColorContext } from "../../colorPicker";

export const Transparent = () => {
  const { colors, onUpdateHsva } = useContext(ColorContext);

  const transparentRef = useRef<HTMLDivElement>(null);

  const { h, a } = colors.hsv;

  const updateTransparency = (e: MouseEvent) => {
    if (!transparentRef || !transparentRef.current) return;
    onUpdateHsva({
      ...colors.hsv,
      a: Helpers.calculateTransparency(e, transparentRef.current),
    });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    updateTransparency(e.nativeEvent);
    document.addEventListener("mousemove", updateTransparency);
    document.addEventListener("mouseup", handleHueMouseUp);
  };

  const handleHueMouseUp = (e: MouseEvent) => {
    document.removeEventListener("mousemove", updateTransparency);
    document.removeEventListener("mouseup", handleHueMouseUp);
  };

  return (
    <div
      className={transparencyContainer}
      ref={transparentRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className={transparencyHue}
        style={{
          backgroundImage: `linear-gradient(to right, transparent, hsl(${h}, 100%, 50%))`,
        }}
      ></div>

      <div className={transparencyCursor} style={{ left: a * 100 + "%" }}>
        <div style={{ backgroundColor: `hsla(${h}, 100%, 50%, ${a})` }} />
      </div>
    </div>
  );
};
