import { FC, useState } from "react";
import styles from "./index.module.less";
import { Saturation } from "./saturation/saturation";
import { convertToColorSet } from "./util/convert";
import { HSL, HSV, RGB, RGBA, HEX, HSVA } from "./types";
import { Hue } from "./hue/hue";
import { Transparent } from "./transparency/transparency";
import { ColorPreview } from "./colorPreview/colorPreview";
import { HexInput } from "./colorInput/hexInput";
import { Dropper } from "./dropper/dropper";

interface ColorPickerInterface {
  width?: number;
  color?: HSV | HSL | RGB | RGBA | HEX;
  onChange?: (color: string) => void;
  onComplete?: (color: string) => void;
}

const WIDTH = 200;
const COLOR = "#ffffff";

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color = COLOR, width = WIDTH } = props;
  const [hsva, setHSVA] = useState(convertToColorSet(color).hsv);

  const handleChangeHSVA = (hsva: HSVA) => {
    setHSVA(hsva);
  };

  return (
    <div className={styles["color-picker-container"]} style={{ width }}>
      <Saturation hsv={hsva} onChange={handleChangeHSVA}></Saturation>

      <div className={styles["color-picker-toolbox-container"]}>
        <ColorPreview hsv={hsva}></ColorPreview>
        <div style={{ flex: 0.9 }}>
          <Hue hsva={hsva} onChange={handleChangeHSVA}></Hue>
          <Transparent hsv={hsva} onChange={handleChangeHSVA}></Transparent>
        </div>
      </div>

      <div className={styles["color-input"]}>
        <HexInput hsva={hsva} onChange={handleChangeHSVA}></HexInput>
        <Dropper onChange={handleChangeHSVA}></Dropper>
      </div>
    </div>
  );
};
