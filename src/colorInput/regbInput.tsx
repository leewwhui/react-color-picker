import { FC } from "react";
import { HSVA, RGBA } from "../types";
import { InputCell } from "./inputCell";
import { ColorModel } from "../colorModel";
import styles from './rgbInput.module.less';

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
    <div className={styles['rgba-container']}>
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
