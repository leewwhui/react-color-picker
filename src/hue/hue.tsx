import React, { FC, useRef } from "react";
import {hueContainer, hueCursor} from './hue.style';
import { HSVA } from "../types";
import { calculateHue } from "../util/hue_helper";

interface HueInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

export const Hue: FC<HueInterface> = (props) => {
  const { hsva, onChange } = props;
  const hue = hsva.h;
  const hueRef = useRef<HTMLDivElement>(null);
  const huePosition = (hue / 360) * 100;

  const updateHue = (e: React.MouseEvent | MouseEvent) => {
    if (!hueRef || !hueRef.current) return;
    onChange({ ...hsva, h: calculateHue(e, hueRef.current) });
  };

  const handleHueMouseDown = (e: React.MouseEvent) => {
    updateHue(e);
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
