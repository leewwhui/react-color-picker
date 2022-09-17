import { useState } from "react";
import { toCanvas } from "html-to-image";
import tinycolor from "tinycolor2";

const mask = document.createElement("div");
mask.style.cssText =
  "position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 9999; cursor: crosshair;";

export const useCustomEyeDropper = () => {
  const [color, setColor] = useState<string>("transparent");

  const openDropper = () => {
    const { left, top, width, height } = document.body.getBoundingClientRect();
    toCanvas(document.body, {
      width,
      height,
      canvasWidth: width,
      canvasHeight: height,
      pixelRatio: 1,
    }).then((canvas) => {
      canvas.style.cssText = `position: absolute; top: ${top}px; left: ${left}px;`;

      document.body.append(mask);
      const context = canvas.getContext("2d")!;

      mask.addEventListener("mousedown", (e: MouseEvent) => {
        const x = e.clientX;
        const y = e.clientY;
        const [r, g, b, a] = context.getImageData(x, y, 1, 1).data;
        const hex = tinycolor({ r, g, b, a }).toHex();
        setColor(`#${hex}`);
      });
    });
  };

  const closeDropper = () => {
    if (!document.body.contains(mask)) return;
    document.body.removeChild(mask);
  };

  return {
    openDropper,
    closeDropper,
    color,
  };
};
