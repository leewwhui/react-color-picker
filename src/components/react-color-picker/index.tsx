import { FC, useState } from "react";
import styles from "./index.module.less";
import { Saturation } from "./saturation/saturation";
import { convertToColorSet } from "./util/convert";
import { HSL, HSV, RGB, RGBA, HEX } from "./types";
import { Hue } from "./hue/hue";
import { Transparent } from "./transparency/transparency";
import { ColorPreview } from "./colorPreview/colorPreview";

interface ColorPickerInterface {
  width?: number;
  color?: HSV | HSL | RGB | RGBA | HEX;
  onChange?: (color: string) => void;
  onComplete?: (color: string) => void;
}

const WIDTH = 200;

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color = "#ffffff", width = WIDTH } = props;
  const colors = convertToColorSet(color);
  const [hsv, setHSV] = useState<HSV>(colors.hsv);
  const [transparency, setTransparency] = useState<number>(colors.rgb.a);

  const handleChangeHSL = (hsv: HSV) => {
    setHSV(hsv);
  };

  const handleChangeHue = (hue: number) => {
    setHSV({ h: hue, s: hsv.s, v: hsv.v });
  };

  const handleChangeTransparency = (transparency: number) => {
    setTransparency(transparency);
  };

  return (
    <div className={styles["color-picker-container"]} style={{ width }}>
      <Saturation hsv={hsv} onChange={handleChangeHSL}></Saturation>

      <div className={styles["color-picker-toolbox-container"]}>
        <Hue hue={hsv.h} onHueChange={handleChangeHue}></Hue>
        <Transparent
          hue={hsv.h}
          transparency={transparency}
          onTransparencyChange={handleChangeTransparency}
        ></Transparent>
      </div>
    </div>
  );
};
