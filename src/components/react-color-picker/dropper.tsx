import { FC, useEffect } from "react";
import { CgColorPicker } from "react-icons/cg";
import { useCustomEyeDropper } from "./hooks/useCustomEyeDropper";
import { isBrowserEyeDropper } from "./util/isBrowserSupportEyeDropper";

interface DropperInterface {
  onChange: (color: string) => void;
}

export const Dropper: FC<DropperInterface> = (props) => {
  const { onChange } = props;
  const { openDropper, color, closeDropper } = useCustomEyeDropper();

  const handleOpenDropper = async () => {
    if (isBrowserEyeDropper()) {
      // @ts-ignore
      const eyeDropper = new EyeDropper();
      // @ts-ignore
      eyeDropper.open().then((res) => onChange(res.sRGBHex));
    } else {
      openDropper();
    }
  };

  useEffect(() => {
    console.log("here");

    closeDropper();
    onChange(color);
  }, [color]);

  return (
    <button onClick={handleOpenDropper} style={{ marginTop: 10 }}>
      <CgColorPicker></CgColorPicker>
    </button>
  );
};
