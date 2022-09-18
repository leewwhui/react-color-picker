import { FC, useEffect, useState } from "react";
import { css, cx } from "@emotion/css";
// import styles from "./input.module.less";
import { HEX, HSVA } from "../types";
import { isValidateHex } from "../util/hue_helper";
import { ColorModel } from "../colorModel";

interface HexInputInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

const inputBox = css`
  display: flex;
  flex: 1;
  align-items: center;
  max-width: 300px;
  background: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  padding-left: 0.5rem;
  overflow: hidden;
  font-family: sans-serif;

  & input {
    flex-grow: 1;
    font-size: 14px;
    background: #fff;
    border: none;
    outline: none;
    box-sizing: border-box;
    letter-spacing: 0.8px;
    padding: 2px 5px;
  }

  &:focus-within {
    border-color: #777;
  }
`;

const prefix = css`
  font-weight: 300;
  font-size: 14px;
  color: #999;
`;

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
    <div className={inputBox}>
      <span className={prefix}>#</span>
      <input value={hex} onChange={(e) => handleHexChange(e.target.value)} />
    </div>
  );
};
