import { FC } from "react";
import { HSV } from "../types";
import { hsv2rgb } from "../util/convert";
import styles from "./colorpreview.module.less";

interface ColorPreviewInterface {
  hsv: HSV;
}

export const ColorPreview: FC<ColorPreviewInterface> = (props) => {
  const { hsv } = props;
  const rgb = hsv2rgb(hsv);

  return (
    <div
      className={styles["color-preview-container"]}
      style={{
        backgroundColor: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      }}
    ></div>
  );
};
