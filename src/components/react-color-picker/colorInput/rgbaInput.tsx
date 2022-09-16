import { FC } from "react";
import styles from "./input.module.less";
import { HSVA, RGBA } from "../types";
import { InputCell } from "./inputCell";
import { convertToColorSet } from "../util/convert";

interface RgbaInputInterface {
  rgba: RGBA;
  onChange: (hsva: HSVA) => void;
}

export const RgbaInput: FC<RgbaInputInterface> = (props) => {
  const { rgba, onChange } = props;

  const handleChange = (rgba: RGBA) => {
    const hsva = convertToColorSet(rgba).hsv;
    onChange({ ...hsva, a: rgba.a });
  };

  return (
    <div className={styles["input-container"]}>
      <InputCell
        value={rgba.r}
        label="R"
        onChange={(r) => handleChange({ ...rgba, r })}
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
        step={2}
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
