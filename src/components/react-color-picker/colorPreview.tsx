import { FC } from "react";
import tinycolor from "tinycolor2";
import { hsvType } from ".";
import styles from "./colorpreview.module.less";
import { hsv2rgb } from "./util/convert";

interface ColorPreviewInterface {
  hsv: hsvType;
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
