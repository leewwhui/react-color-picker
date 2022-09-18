import { FC } from "react";
import { css } from "@emotion/css";
import { Saturation } from "./saturation/saturation";
import { HSVA, ColorSet, colorPrams } from "./types";
import { Hue } from "./hue/hue";
import { Transparent } from "./transparency/transparency";
import { ColorPreview } from "./colorPreview/colorPreview";
import { HexInput } from "./colorInput/hexInput";
import { Dropper } from "./dropper/dropper";
import { useColorManipulate } from "./hooks/useColorManipulate";
import { COLOR, WIDTH } from "./constants";
import { RgbaInput } from "./colorInput/regbInput";
interface ColorPickerInterface {
  width?: number;
  color?: colorPrams;
  onChange?: (color: ColorSet) => void;
}

const container = css`
  padding: 10px;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px;
`;

const toolboxContainer = css`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const colorInput = css`
  width: 100%;
  display: flex;
  margin-top: 10px;
`;

export const ReactColorPicker: FC<ColorPickerInterface> = (props) => {
  const { color = COLOR, width = WIDTH, onChange } = props;
  const { hsva, handleChangeColor } = useColorManipulate(color, onChange);

  const handleChangeHSVA = (hsva: HSVA) => {
    handleChangeColor(hsva);
  };

  return (
    <div className={container} style={{ width }}>
      <Saturation hsv={hsva} onChange={handleChangeHSVA}></Saturation>

      <div className={toolboxContainer}>
        <ColorPreview hsv={hsva}></ColorPreview>
        <div style={{ flex: 0.9 }}>
          <Hue hsva={hsva} onChange={handleChangeHSVA}></Hue>
          <Transparent hsv={hsva} onChange={handleChangeHSVA}></Transparent>
        </div>
      </div>

      <div className={colorInput}>
        <HexInput hsva={hsva} onChange={handleChangeColor}></HexInput>
        <RgbaInput hsva={hsva} onChange={handleChangeColor}></RgbaInput>
      </div>

      <Dropper onChange={handleChangeColor}></Dropper>
    </div>
  );
};
