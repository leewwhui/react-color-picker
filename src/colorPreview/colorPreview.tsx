import React, { FC } from "react";
import {colorPreviewContainer} from './colorPreview.style';
import { ColorModel } from '../colorModel';
import { HSVA } from "../types";

interface ColorPreviewInterface {
  hsv: HSVA;
}

export const ColorPreview: FC<ColorPreviewInterface> = (props) => {
  const { hsv } = props;
  const { r, g, b, a } = ColorModel.toColorSet(hsv).rgba;

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
