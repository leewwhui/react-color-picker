import React, { FC } from "react";
import {colorPreviewContainer} from './colorPreview.style';
import tinycolor from "tinycolor2";
import { HSVA } from "../types";

interface ColorPreviewInterface {
  hsv: HSVA;
}

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
