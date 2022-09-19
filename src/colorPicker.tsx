import React, { FC } from "react";
import { Saturation } from "./saturation/saturation";
import {container, toolboxContainer, colorInput} from './colorPicker.style';
import { HSVA, colorPrams, ColorSet } from "./types";
import { Hue } from "./hue/hue";
import { Transparent } from "./transparency/transparency";
import { ColorPreview } from "./colorPreview/colorPreview";
import { HexInput } from "./colorInput/hexInput";
import { useColorManipulate } from "./hooks/useColorManipulate";
import { COLOR, WIDTH } from "./constants";
import { RgbaInput } from "./colorInput/regbInput";
import { ColorPreset } from "./colorPreset/colorPreset";

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
    <div className={container} style={{ width }}>
      <Saturation hsv={hsva} onChange={handleChangeHSVA}></Saturation>

      <div className={toolboxContainer}>
        <ColorPreview hsv={hsva}></ColorPreview>
        <div style={{ flex: 0.9 }}>
          <Hue hsva={hsva} onChange={handleChangeHSVA}></Hue>
          <Transparent hsv={hsva} onChange={handleChangeHSVA}></Transparent>
        </div>
      </div>

      <div className={colorInput}>
        <HexInput hsva={hsva} onChange={handleChangeColor}></HexInput>
        <RgbaInput hsva={hsva} onChange={handleChangeColor}></RgbaInput>
      </div>

      <ColorPreset onChange={handleChangeColor}></ColorPreset>
    </div>
  );
};
