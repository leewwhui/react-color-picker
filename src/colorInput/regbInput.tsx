import { FC, useState } from "react";
import { HSVA, RGBA } from "../types";
import { InputCell } from "./inputCell";
import { css } from "@emotion/css";
import { ColorModel } from "../colorModel";

interface RgbaInputInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

const rgbInputContainer = css`
  display: flex;
  flex: 1;

  input {
    box-sizing: border-box;
    padding: 0px 2px;
    height: 20px;
    width: 95%;
    border: 1px solid #eee;
  }
`;

export const RgbaInput: FC<RgbaInputInterface> = (props) => {
  const { hsva, onChange } = props;

  const rgba = ColorModel.toColorSet(hsva).rgba;

  const handleChange = (rgba: RGBA) => {
    const hsva = ColorModel.toColorSet(rgba).hsv;
    onChange(hsva);
  };

  return (
    <div className={rgbInputContainer}>
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
        onChange={(a) => {
          if (a < 0) a = 0;
          if (a > 100) a = 100;
          handleChange({ ...rgba, a: a / 100 });
        }}
      ></InputCell>
    </div>
  );
};
