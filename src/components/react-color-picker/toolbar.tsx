import { FC } from "react";
import styles from "./toolbox.module.less";
import { MoveWrapper } from "./moveWrapper";

interface ColorToolBoxInterface {
  hue: number;
  // transparent: number;
  // onHueChange: () => void;
  // onTransparentChange: () => void;
}

export const ColorToolBox: FC<ColorToolBoxInterface> = (props) => {
  // const { hue, transparent, onHueChange, onTransparentChange } = props;
  const { hue } = props;

  const handleHueChange = () => {};

  return (
    <div style={{ flex: 1, height: "100%" }}>
      <div className={styles["color-picker-hue"]}></div>

      <div className={styles["color-picker-transparent"]}>
        <div
          className={styles["color-picker-transparent-hue"]}
          style={{
            backgroundImage: `linear-gradient(to right, transparent, hsl(${hue}, 100%, 50%))`,
          }}
        ></div>
      </div>
    </div>
  );
};
