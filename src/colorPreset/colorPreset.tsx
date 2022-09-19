import React, { FC } from "react";
import {presetCell, presetContainer} from './colorPreset.style';
import { presetColors } from "../constants";
import { HEX, HSVA } from "../types";
import { Dropper } from "../dropper/dropper";
import { ColorModel } from "../colorModel";

interface ColorPresetInterface {
  onChange: (hsva: HSVA) => void;
}

export const ColorPreset: FC<ColorPresetInterface> = (props) => {
  const { onChange } = props;

  const handleSelectColor = (color: HEX) => {
    onChange(ColorModel.toColorSet(color).hsv);
  };

  return (
    <div className={presetContainer}>
      {presetColors.map((color) => (
        <div
          key={color}
          style={{ backgroundColor: color }}
          className={presetCell}
          onMouseDown={() => handleSelectColor(color)}
        ></div>
      ))}
      <Dropper onChange={onChange}></Dropper>
    </div>
  );
};
