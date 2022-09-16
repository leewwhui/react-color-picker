import { FC, useState } from "react";
import styles from "./input.module.less";
import { HEX, HSVA } from "../types";
import { convertHEX2HSVA } from "../util/convert";
import { isValidateHex } from "../util/hue_helper";

interface HexInputInterface {
  hex: HEX;
  onChange: (hsva: HSVA) => void;
}

export const HexInput: FC<HexInputInterface> = (props) => {
  const [hex, setHex] = useState<HEX>(props.hex);
  const { onChange } = props;

  const handleHexChange = (hex: HEX) => {
    if (isValidateHex(`#${hex}`)) {
      console.log(convertHEX2HSVA(hex));
      onChange(convertHEX2HSVA(hex));
    }
    setHex(hex);
  };

  return (
    <div className={styles["input-cell"]}>
      <input value={hex} onChange={(e) => handleHexChange(e.target.value)} />
      <span style={{ cursor: "default" }}>HEX</span>
    </div>
  );
};
