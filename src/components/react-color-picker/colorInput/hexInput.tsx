import { FC, useEffect, useState } from "react";
import styles from "./input.module.less";
import { HEX, HSVA } from "../types";
import { isValidateHex } from "../util/hue_helper";
import { ColorModel } from "../colorModel";

interface HexInputInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

export const HexInput: FC<HexInputInterface> = (props) => {
  const { hsva, onChange } = props;
  const [hex, setHex] = useState<HEX>(ColorModel.toColorSet(hsva).hex);

  useEffect(() => {
    setHex(ColorModel.toColorSet(hsva).hex);
  }, [hsva]);

  const handleHexChange = (hex: HEX) => {
    if (isValidateHex(hex)) {
      onChange(ColorModel.toColorSet(hex).hsv);
    }
    setHex(hex);
  };

  return (
    <div className={styles["input-box"]}>
      <span className={styles["prefix"]}>#</span>
      <input value={hex} onChange={(e) => handleHexChange(e.target.value)} />
    </div>
  );
};
