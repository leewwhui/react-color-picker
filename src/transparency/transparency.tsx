import React, { FC, useRef } from "react";
import { css } from "@emotion/css";
import { HSVA } from "../types";
import { calculateTransparency } from "../util/transparency_helper";
import { transparentImageUrl } from "../constants";

interface TransparentInterface {
  hsv: HSVA;
  onChange: (hsva: HSVA) => void;
}

const transparentContainer = css`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 15px;
  border-radius: 12px;
  background-image: url(${transparentImageUrl});
`;

const transparentHue = css`
  border-radius: 12px;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`;

const transparentCursor = css`
  position: absolute;
  width: 18px;
  height: 18px;
  border: 2px solid #eee;
  border-radius: 50%;
  box-sizing: border-box;
  transform: translate(-9px, -2px);
  background-image: url(${transparentImageUrl});
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
  }
`;

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
      className={transparentContainer}
      ref={transparentRef}
      onMouseDown={handleMouseDown}
    >
      <div
        className={transparentHue}
        style={{
          backgroundImage: `linear-gradient(to right, transparent, hsl(${h}, 100%, 50%))`,
        }}
      ></div>

      <div className={transparentCursor} style={{ left: a * 100 + "%" }}>
        <div style={{ backgroundColor: `hsla(${h}, 100%, 50%, ${a})` }} />
      </div>
    </div>
  );
};
