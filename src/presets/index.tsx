import { FC } from "react";
import { ColorPickerProps } from "../types";
import { ReactColorPicker } from "../colorPicker";
import { Saturation } from "../components/saturation/saturation";
import { Hue } from "../components/hue/hue";
import { Transparent } from "../components/transparent/transparent";

export const Picker: FC<ColorPickerProps> = (props) => {
  const { onChange, color } = props;
  return (
    <ReactColorPicker color={color} onChange={onChange}>
      <Saturation />
      <Hue />
      <Transparent />
    </ReactColorPicker>
  );
};
