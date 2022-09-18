import { FC, useEffect, useState } from "react";
import styles from "./hex.module.less";
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
  const [isFocus, setIsFocus] = useState<boolean>(false);

  useEffect(() => {
    if (isFocus) return;
    setHex(ColorModel.toColorSet(hsva).hex);
  }, [hsva]);

  const handleHexChange = (hex: HEX) => {
    if (isValidateHex(hex)) {
      onChange(ColorModel.toColorSet(hex).hsv);
    }
    setHex(hex);
  };

  const handleOnBlur = () => {
    setHex(ColorModel.toColorSet(hsva).hex);
    setIsFocus(false);
  };

  return (
    <div className={styles["inputBox"]}>
      <input
        value={hex}
        onChange={(e) => handleHexChange(e.target.value)}
        onFocus={() => setIsFocus(true)}
        onBlur={handleOnBlur}
      />
      <span>Hex</span>
    </div>
  );
};
