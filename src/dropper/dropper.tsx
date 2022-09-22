import React, { FC, useEffect } from "react";
import {dropper} from './dropper.style';
import { BsEyedropper } from 'react-icons/bs';
import { useCustomEyeDropper } from "./hooks/useCustomEyeDropper";
import { isBrowserEyeDropper } from "../util/isBrowserSupportEyeDropper";
import { HSVA } from "../types";
import { ColorModel } from "../colorModel";

interface DropperInterface {
  onChange: (hsva: HSVA) => void;
}

export const Dropper: FC<DropperInterface> = (props) => {
  const { onChange } = props;
  const { openDropper, color, closeDropper } = useCustomEyeDropper();

  const handleOpenDropper = async (e: React.MouseEvent) => {
    if (isBrowserEyeDropper()) {
      // @ts-ignore
      const eyeDropper = new EyeDropper();
      eyeDropper
        .open()
        // @ts-ignore
        .then((res) => onChange(ColorModel.toColorSet(res.sRGBHex).hsv));
    } else {
      openDropper(e);
    }
  };

  useEffect(() => {
    if (!color) return;
    const hex = ColorModel.toColorSet(color).hex;
    closeDropper();
    onChange(ColorModel.toColorSet(hex).hsv);
  }, [color]);

  return (
    <button onClick={handleOpenDropper} className={dropper}>
      <BsEyedropper></BsEyedropper>
    </button>
  );
};
