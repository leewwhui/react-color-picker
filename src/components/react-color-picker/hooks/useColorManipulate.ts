import { useEffect, useRef, useState } from "react";
import { colorPrams, ColorSet, HSVA } from "../types";
import {
  convertHSVA2ColorSet,
  convertToColorSet,
  isColorEqual,
  isHsvaEqual,
} from "../util/convert";

export const useColorManipulate = (
  color: colorPrams,
  onChange?: (color: ColorSet) => void
) => {
  const [hsva, setHSVA] = useState(convertToColorSet(color).hsv);

  // source color and hsva
  const cache = useRef({ color, hsva });

  useEffect(() => {
    const hsva = convertToColorSet(color).hsv;
    if (!(color.toString() === cache.current.color.toString())) {
      cache.current = { color, hsva };
      setHSVA(hsva);
    }
  }, [color]);

  useEffect(() => {
    const colors = convertHSVA2ColorSet(hsva);

    if (
      !isHsvaEqual(cache.current.hsva, hsva) &&
      !isColorEqual(colors, cache.current.color)
    ) {
      cache.current = { color: colors.hex, hsva };
      onChange && onChange(colors);
    }
  }, [hsva, onChange]);

  const handleChangeColor = (hsva: HSVA) => {
    setHSVA(hsva);
  };

  return { hsva, handleChangeColor };
};
