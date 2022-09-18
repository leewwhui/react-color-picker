import { FC } from "react";
import styles from "./index.module.less";
import { Saturation } from "./saturation/saturation";
import { HSVA, ColorSet, colorPrams } from "./types";
import { Hue } from "./hue/hue";
import { Transparent } from "./transparency/transparency";
import { ColorPreview } from "./colorPreview/colorPreview";
import { HexInput } from "./colorInput/hexInput";
import { Dropper } from "./dropper/dropper";
import { useColorManipulate } from "./hooks/useColorManipulate";
import { COLOR, WIDTH } from "./constants";

interface ColorPickerInterface {
  width?: number;
  color?: colorPrams;
  onChange?: (color: ColorSet) => void;
}

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color = COLOR, width = WIDTH, onChange } = props;
  const { hsva, handleChangeColor } = useColorManipulate(color, onChange);

  const handleChangeHSVA = (hsva: HSVA) => {
    handleChangeColor(hsva);
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
