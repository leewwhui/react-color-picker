import { createContext, FC, useMemo } from "react";
import { ColorContextProps, ColorPickerProps } from "./types";
import { useColorManipulate } from "./hooks/useColorManipulate";
import { Conveter } from "./utils/conveter";

const defaultColor = "#fff";

export const ColorContext = createContext<ColorContextProps>({
  colors: Conveter.fromHsva(Conveter.toHsva(defaultColor)),
  onUpdateHsva: () => {},
});

export const ReactColorPicker: FC<ColorPickerProps> = (props) => {
  const { color = defaultColor, onChange } = props;
  const { hsva, onUpdateHsva } = useColorManipulate(color, onChange);

  const children = useMemo(() => {
    if (Array.isArray(props.children)) return props.children;
    return [props.children];
  }, [props.children]);

  return (
    <ColorContext.Provider
      value={{ colors: Conveter.fromHsva(hsva), onUpdateHsva }}
    >
      <div>{children.map((child) => child)}</div>
    </ColorContext.Provider>
  );
};
