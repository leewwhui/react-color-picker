import React, { FC } from "react";
import {presetCell, presetContainer} from './colorPreset.style';
import { colorParams, HSVA, RGBA } from "../types";
import { ColorModel } from "../colorModel";

interface ColorPresetInterface {
  onChange: (hsva: HSVA) => void;
  presetColors: colorParams[]
}

export const ColorPreset: FC<ColorPresetInterface> = (props) => {
  const { onChange, presetColors } = props;

  const handleSelectColor = (color: RGBA) => {
    onChange(ColorModel.toColorSet(color).hsv);
  };

  return (
    <div className={presetContainer}> {}
      {presetColors.map((color) => {
        const {r, g, b, a} = ColorModel.toColorSet(color).rgba;
        return (
          <div
            key={color.toString()}
            style={{ backgroundColor: `rgba(${r}, ${g}, ${b}, ${a})`}}
            className={presetCell}
            onMouseDown={() => handleSelectColor({r, g, b, a})}
          ></div>
      )}
      )}
    </div>
  );
};
