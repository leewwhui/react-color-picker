import React, { FC, useRef } from "react";
import {transparencyContainer , transparencyCursor, transparencyHue} from './transparency.style';
import { HSVA } from "../types";
import { calculateTransparency } from "../util/transparency_helper";

interface TransparentInterface {
  hsv: HSVA;
  onChange: (hsva: HSVA) => void;
}

export const Transparent: FC<TransparentInterface> = (props) => {
  const { hsv, onChange } = props;
  const transparentRef = useRef<HTMLDivElement>(null);

  const { h, a } = hsv;

  const updateTransparency = (e: React.MouseEvent | MouseEvent) => {
    if (!transparentRef || !transparentRef.current) return;
    onChange({ ...hsv, a: calculateTransparency(e, transparentRef.current) });
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
