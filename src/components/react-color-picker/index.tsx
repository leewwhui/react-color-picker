import { FC, useEffect, useMemo, useRef, useState } from "react";
import styles from "./colorpicker.module.less";
import convert from "color-convert";
import { MoveWrapper } from "./moveWrapper";
import { ColorToolBox } from "./toolbar";
import { ColorPreview } from "./colorPreview";
import { Dropper } from "./dropper";

interface ColorPickerInterface {
  color?: string;
  onChange?: (color: string) => void;
  onComplete?: (color: string) => void;
}

type vector2 = { x: number; y: number };

const WIDTH = 220;
const HEIGHT = 200;

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color } = props;
  const [hsv, setHSV] = useState<number[]>(convert.hex.hsv(color || "#fff"));

  const handleChangeHSL = (position: vector2) => {
    const { x, y } = position;
    const h = hsv[0];
    const s = (x / WIDTH) * 100;
    const v = 100 - (y / HEIGHT) * 100;
    setHSV([h, s, v]);
  };

  const handleChangeFromDropper = (hex: string) => {
    const [h, s, v] = convert.hex.hsv(hex);
    setHSV([h, s, v]);
  };

  const hslPoition = useMemo(() => {
    const s = hsv[1];
    const v = hsv[2];
    return { x: (s / 100) * WIDTH, y: ((100 - v) / 100) * HEIGHT };
  }, [hsv]);

  return (
    <div className={styles["color-picker-container"]}>
      <MoveWrapper
        className={styles["color-hsl-space"]}
        style={{
          backgroundColor: `hsl(${hsv[0]}, 100%, 50%)`,
          width: WIDTH,
          height: HEIGHT,
        }}
        onChange={handleChangeHSL}
      >
        <div
          className={styles["color-picker-saturation_cursor"]}
          style={{
            backgroundColor: `#${convert.hsv.hex([hsv[0], hsv[1], hsv[2]])}`,
            left: hslPoition.x,
            top: hslPoition.y,
          }}
        />
      </MoveWrapper>

      <div className={styles["color-picker-toolbox-container"]}>
        <ColorPreview
          color={convert.hsv.hex([hsv[0], hsv[1], hsv[2]])}
        ></ColorPreview>
        <ColorToolBox hue={hsv[0]}></ColorToolBox>
      </div>

      <Dropper onChange={handleChangeFromDropper}></Dropper>
    </div>
  );
};
