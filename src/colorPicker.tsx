import  React, { FC } from "react";
import { Saturation } from "./saturation/saturation";
import {container, toolboxContainer, colorInput, toolboxSelector} from './colorPicker.style';
import { colorParams, ColorSet } from "./types";
import { Hue } from "./hue/hue";
import { Transparent } from "./transparency/transparency";
import { ColorPreview } from "./colorPreview/colorPreview";
import { HexInput } from "./colorInput/hexInput";
import { useColorManipulate } from "./hooks/useColorManipulate";
import { COLOR, DEFAULT_PRESET_COLORS, WIDTH } from "./constants";
import { RgbaInput } from "./colorInput/regbInput";
import { ColorPreset } from "./colorPreset/colorPreset";
import { Dropper } from "./dropper/dropper";

interface ColorPickerInterface {
  width?: number | string;
  color?: colorParams;
  onChange?: (color: ColorSet) => void;
  hideEyeDrop?: boolean;
  hidePresets?: boolean;
  presetColors?: colorParams[];
}

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color = COLOR, width = WIDTH, onChange, hideEyeDrop = false, hidePresets = false,  presetColors = DEFAULT_PRESET_COLORS } = props;
  const { hsva, handleChangeColor } = useColorManipulate(color, onChange);

  return (
    <div className={container} style={{ width }}>
      <Saturation hsv={hsva} onChange={handleChangeColor}></Saturation>

      <div className={toolboxContainer}>
        <ColorPreview hsv={hsva}></ColorPreview>
        <div className={toolboxSelector}>
          <Hue hsva={hsva} onChange={handleChangeColor}></Hue>
          <Transparent hsv={hsva} onChange={handleChangeColor}></Transparent>
        </div>
      </div>

      <div className={colorInput}>
        <HexInput hsva={hsva} onChange={handleChangeColor}></HexInput>
        <RgbaInput hsva={hsva} onChange={handleChangeColor}></RgbaInput>
        {!hideEyeDrop &&  <Dropper onChange={handleChangeColor}></Dropper>}
      </div>

      {!hidePresets && <ColorPreset presetColors={presetColors} onChange={handleChangeColor}></ColorPreset>}
    </div>
  );
};
