import { useEffect, useRef, useState } from "react";
import { colorParams, Colors, HSVA } from "../types";
import { Conveter } from "../utils/conveter";

export const useColorManipulate = (
  color: colorParams,
  onChange?: (color: Colors) => void
) => {
  const [hsva, setHSVA] = useState(Conveter.toHsva(color));

  // source color and hsva
  const cache = useRef({ color, hsva });

  useEffect(() => {
    if (!Conveter.isColorEqual(color, cache.current.color)) {
      const hsva = Conveter.toHsva(color);
      cache.current = { color, hsva };
      setHSVA(hsva);
    }
  }, [color]);

  useEffect(() => {
    const colors = Conveter.fromHsva(hsva);
    const colorType = Conveter.getType(cache.current.color);

    if (
      colorType &&
      !Conveter.isColorEqual(colors[colorType], cache.current.color) &&
      !Conveter.isColorEqual(colors.hsv, cache.current.hsva)
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
