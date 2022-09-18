import React, { FC, useRef } from "react";
import { css } from "@emotion/css";
import { HSVA } from "../types";
import { calculateHue } from "../util/hue_helper";

interface HueInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

const hueContainer = css`
  position: relative;
  width: 100%;
  height: 15px;
  border-radius: 12px;
  background: linear-gradient(
    to right,
    #f00 0%,
    #ff0 17%,
    #0f0 33%,
    #0ff 50%,
    #00f 67%,
    #f0f 83%,
    #f00 100%
  );
`;

const hueCursor = css`
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid #eee;
  border-radius: 50%;
  box-sizing: border-box;
  transform: translate(-9px, -2px);
`;

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
