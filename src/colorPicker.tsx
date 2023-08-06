import { createContext, FC, useMemo } from "react";
import { ColorContextProps, ColorPickerProps } from "./types";
import { useColorManipulate } from "./hooks/useColorManipulate";
import { defultColor } from "./constants";
import { Saturation } from "./components/saturation/saturation";
import { Utils } from "./colorModel";

export const ColorContext = createContext<ColorContextProps>({
  colors: Utils.toColorSet(defultColor),
  onUpdateHsva: () => {},
});

export const ReactColorPicker: FC<ColorPickerProps> = (props) => {
  const { color = defultColor, onChange } = props;
  const { hsva, onUpdateHsva } = useColorManipulate(color, onChange);

  const colors = useMemo(() => {
    const colorset = Utils.toColorSet(hsva);
    colorset.hsv = hsva;
    return colorset;
  }, [hsva]);

  return (
    <ColorContext.Provider value={{ colors, onUpdateHsva }}>
      <div style={{ width: "200px" }}>
        <Saturation />
      </div>
    </ColorContext.Provider>
  );
};
