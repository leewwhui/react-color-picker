import { useEffect, useRef, useState } from "react";
import { colorParams, ColorSet, HSVA } from "../types";
import { Utils } from "../colorModel";

export const useColorManipulate = (
  color: colorParams,
  onChange?: (color: ColorSet) => void
) => {
  const [hsva, setHSVA] = useState(Utils.toColorSet(color).hsv);

  // source color and hsva
  const cache = useRef({ color, hsva });

  useEffect(() => {
    if (!Utils.isColorEqual(color, cache.current.color)) {
      const hsva = Utils.toColorSet(color).hsv;
      cache.current = { color, hsva };
      setHSVA(hsva);
    }
  }, [color]);

  useEffect(() => {
    const colors = Utils.toColorSet(hsva);
    const colorType = Utils.getType(cache.current.color);

    if (
      colorType &&
      !Utils.isColorEqual(colors[colorType], cache.current.color) &&
      !Utils.isColorEqual(colors.hsv, cache.current.hsva)
    ) {
      cache.current = { color: colors[colorType], hsva };
      onChange && onChange(colors);
    }
  }, [hsva]);

  const onUpdateHsva = (hsva: HSVA) => {
    setHSVA(hsva);
  };

  return { hsva, onUpdateHsva };
};
