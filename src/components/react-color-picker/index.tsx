import { FC, useState } from "react";
import styles from "./index.module.less";
import { Saturation } from "./saturation/saturation";
import { convertHexToHsv } from "./util/convert";
import { ColorToolBox } from "./toolbox/toolbox";
import { ColorPreview } from "./colorPreview";

interface ColorPickerInterface {
  width?: number;
  color?: string;
  onChange?: (color: string) => void;
  onComplete?: (color: string) => void;
}

export type vector2 = { x: number; y: number };
export type hsvType = { h: number; s: number; v: number };

const WIDTH = 200;

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color = "#ffffff", width = WIDTH } = props;
  const [hsv, setHSV] = useState<hsvType>(() => convertHexToHsv(color));

  const handleChangeHSL = (hsv: hsvType) => {
    setHSV(hsv);
  };

  const handleChangeHue = (hue: number) => {
    setHSV({ h: hue, s: hsv.s, v: hsv.v });
  };

  return (
    <div className={styles["color-picker-container"]} style={{ width }}>
      <Saturation hsv={hsv} onChange={handleChangeHSL}></Saturation>

      <div className={styles["color-picker-toolbox-container"]}>
        <ColorPreview hsv={hsv}></ColorPreview>
        <ColorToolBox hue={hsv.h} onHueChange={handleChangeHue}></ColorToolBox>
      </div>
    </div>
  );
};
