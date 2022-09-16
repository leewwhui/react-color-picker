import { FC } from "react";
import tinycolor from "tinycolor2";
import { HSVA } from "../types";
import styles from "./colorPreview.module.less";

interface ColorPreviewInterface {
  hsv: HSVA;
}

export const ColorPreview: FC<ColorPreviewInterface> = (props) => {
  const { hsv } = props;
  const { r, g, b, a } = tinycolor(hsv).toRgb();

  return (
    <div className={styles["color-preview-container"]}>
      <div
        style={{
          backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`,
        }}
      ></div>
    </div>
  );
};
