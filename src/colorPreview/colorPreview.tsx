import { FC } from "react";
import { css } from "@emotion/css";
import tinycolor from "tinycolor2";
import { HSVA } from "../types";

interface ColorPreviewInterface {
  hsv: HSVA;
}

const colorPreviewContainer = css`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 1px solid #eee;
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAADFJREFUOE9jZGBgEGHAD97gk2YcNYBhmIQBgWSAP52AwoAQwJvQRg1gACckQoC2gQgAIF8IscwEtKYAAAAASUVORK5CYII=");
  overflow: hidden;

  div {
    width: 100%;
    height: 100%;
  }
`;

export const ColorPreview: FC<ColorPreviewInterface> = (props) => {
  const { hsv } = props;
  const { r, g, b, a } = tinycolor(hsv).toRgb();

  return (
    <div className={colorPreviewContainer}>
      <div
        style={{
          backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
        }}
      ></div>
    </div>
  );
};
