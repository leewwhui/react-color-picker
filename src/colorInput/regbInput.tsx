import React, { FC } from "react";
import { HSVA, RGBA } from "../types";
import { InputCell } from "./inputCell";
import { ColorModel } from "../colorModel";
import {rgbaContainer} from './rgbInput.style';

interface RgbaInputInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

export const RgbaInput: FC<RgbaInputInterface> = (props) => {
  const { hsva, onChange } = props;

  const rgba = ColorModel.toColorSet(hsva).rgba;

  const handleChange = (rgba: RGBA) => {
    const hsva = ColorModel.toColorSet(rgba).hsv;
    onChange(hsva);
  };

  return (
    <div className={rgbaContainer}>
      <InputCell
        value={rgba.r}
        label="R"
        onChange={(r) => {
          handleChange({ ...rgba, r });
        }}
      ></InputCell>
      <InputCell
        value={rgba.g}
        label="G"
        onChange={(g) => handleChange({ ...rgba, g })}
      ></InputCell>
      <InputCell
        value={rgba.b}
        label="B"
        onChange={(b) => handleChange({ ...rgba, b })}
      ></InputCell>
      <InputCell
        value={Math.floor(rgba.a * 100)}
        label="A"
        max={100}
        onChange={(a) => {
          handleChange({ ...rgba, a: a / 100 });
        }}
      ></InputCell>
    </div>
  );
};
