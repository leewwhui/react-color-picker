import { useEffect, useRef, useState } from "react";
import { ColorModel } from "../colorModel";
import { colorPrams, ColorSet, HSVA } from "../types";

export const useColorManipulate = (
  color: colorPrams,
  onChange?: (color: ColorSet) => void
) => {
  const [hsva, setHSVA] = useState(ColorModel.toColorSet(color).hsv);

  // source color and hsva
  const cache = useRef({ color, hsva });

  useEffect(() => {
    const hsva = ColorModel.toColorSet(color).hsv;
    if (!ColorModel.isColorEqual(color, cache.current.color)) {
      cache.current = { color, hsva };
      setHSVA(hsva);
    }
  }, [color]);

  useEffect(() => {
    const colors = ColorModel.toColorSet(hsva);
    const colorType = ColorModel.getType(cache.current.color);

    if (
      colorType &&
      !ColorModel.isColorEqual(colors[colorType], cache.current.color) &&
      !ColorModel.isColorEqual(colors.hsv, cache.current.hsva)
    ) {
      cache.current = { color: colors[colorType], hsva };
      onChange && onChange(colors);
    }
  }, [hsva, onChange, color]);

  const handleChangeColor = (hsva: HSVA) => {
    setHSVA(hsva);
  };

  return { hsva, handleChangeColor };
};
