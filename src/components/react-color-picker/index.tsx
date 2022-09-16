import { FC, useState } from "react";
import styles from "./index.module.less";
import { Saturation } from "./saturation/saturation";
import { convertHSVA2RGBA, convertToColorSet, hsv2rgb } from "./util/convert";
import { HSL, HSV, RGB, RGBA, HEX, HSVA } from "./types";
import { Hue } from "./hue/hue";
import { Transparent } from "./transparency/transparency";
import { ColorPreview } from "./colorPreview/colorPreview";
import { RgbaInput } from "./colorInput/rgbaInput";

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

  const handleChangeHSV = (hsv: HSV) => {
    setHSVA({ ...hsv, a: hsva.a });
  };

  const handleChangeHue = (hue: number) => {
    const { s, v, a } = hsva;
    setHSVA({ h: hue, s, v, a });
  };

  const handleChangeTransparency = (transparency: number) => {
    const { h, s, v } = hsva;
    setHSVA({ h, s, v, a: transparency });
  };

  const handleChangeRGBA = (rgba: RGBA) => {
    setHSVA(convertToColorSet(rgba).hsv);
  };

  return (
    <div className={styles["color-picker-container"]} style={{ width }}>
      <Saturation hsv={hsva} onChange={handleChangeHSV}></Saturation>
      <div className={styles["color-picker-toolbox-container"]}>
        <ColorPreview hsv={hsva}></ColorPreview>
        <div style={{ flex: 0.9 }}>
          <Hue hue={hsva.h} onHueChange={handleChangeHue}></Hue>
          <Transparent
            hsv={hsva}
            onTransparencyChange={handleChangeTransparency}
          ></Transparent>
        </div>
      </div>
      <RgbaInput
        rgba={convertHSVA2RGBA(hsva)}
        onChangeRgba={handleChangeRGBA}
      ></RgbaInput>
    </div>
  );
};
