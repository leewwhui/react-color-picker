import { FC, useEffect, useState } from "react";
import styles from "./input.module.less";
import { HEX, HSVA } from "../types";
import { convertHEX2HSVA, convertHSVA2HEX } from "../util/convert";
import { isValidateHex } from "../util/hue_helper";

interface HexInputInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

export const HexInput: FC<HexInputInterface> = (props) => {
  const { hsva, onChange } = props;
  const [hex, setHex] = useState<HEX>(convertHSVA2HEX(hsva));

  useEffect(() => {
    setHex(convertHSVA2HEX(hsva));
  }, [hsva]);

  const handleHexChange = (hex: HEX) => {
    if (isValidateHex(hex)) {
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
