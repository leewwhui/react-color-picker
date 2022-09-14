import { FC, useEffect, useMemo, useState } from "react";
import styles from "./index.module.less";
import convert from "color-convert";
import { Saturation } from "./saturation/saturation";
import tinycolor from "tinycolor2";
import { convertHexToHsv } from "./util/convert";

interface ColorPickerInterface {
  width?: number;
  color?: string;
  onChange?: (color: string) => void;
  onComplete?: (color: string) => void;
}

export type vector2 = { x: number; y: number };
export type hsvType = { h: number; s: number; v: number };

const WIDTH = 200;
const HEIGHT = 200;

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color = "#ffffff", width = WIDTH } = props;
  const [hsv, setHSV] = useState<hsvType>(() => convertHexToHsv(color));

  const handleChangeHSL = (hsv: hsvType) => {
    setHSV(hsv);
  };

  // const handleChangeFromDropper = (hex: string) => {
  //   const [h, s, v] = convert.hex.hsv(hex);
  //   setHSV([h, s, v]);
  // };

  // const hslPoition = useMemo(() => {
  //   const s = hsv[1];
  //   const v = hsv[2];
  //   return { x: (s / 100) * WIDTH, y: ((100 - v) / 100) * HEIGHT };
  // }, [hsv]);

  return (
    <div className={styles["color-picker-container"]} style={{ width }}>
      <Saturation hsv={hsv} onChange={handleChangeHSL}></Saturation>
      {/* <MoveWrapper
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

      <Dropper onChange={handleChangeFromDropper}></Dropper> */}
    </div>
  );
};
