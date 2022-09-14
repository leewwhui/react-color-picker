import { FC } from "react";
import styles from "./colorpreview.module.less";

interface ColorPreviewInterface {
  color: string;
}

export const ColorPreview: FC<ColorPreviewInterface> = (props) => {
  const { color } = props;

  return (
    <div
      className={styles["color-preview-container"]}
      style={{ backgroundColor: `#${color}` }}
    ></div>
  );
};
