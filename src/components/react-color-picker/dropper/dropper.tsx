import { FC, useEffect } from "react";
import { convertHEX2HSVA, convertHSVA2HEX } from "../util/convert";
import styles from "./dropper.module.less";
import { CgColorPicker } from "react-icons/cg";
import { useCustomEyeDropper } from "./hooks/useCustomEyeDropper";
import { isBrowserEyeDropper } from "../util/isBrowserSupportEyeDropper";
import { HSVA } from "../types";
import tinycolor from "tinycolor2";

interface DropperInterface {
  onChange: (hsva: HSVA) => void;
}

export const Dropper: FC<DropperInterface> = (props) => {
  const { onChange } = props;
  const { openDropper, color, closeDropper } = useCustomEyeDropper();

  const handleOpenDropper = async () => {
    if (isBrowserEyeDropper()) {
      // @ts-ignore
      const eyeDropper = new EyeDropper();
      // @ts-ignore
      eyeDropper.open().then((res) => onChange(convertHEX2HSVA(res.sRGBHex)));
    } else {
      openDropper();
    }
  };

  useEffect(() => {
    if (!color) return;
    const hex = tinycolor(color).toHex();
    onChange(convertHEX2HSVA(hex));
    closeDropper();
  }, [color]);

  return (
    <button onClick={handleOpenDropper} className={styles["dropper"]}>
      <CgColorPicker></CgColorPicker>
    </button>
  );
};
