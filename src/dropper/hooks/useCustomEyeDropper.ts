import React, { useState } from "react";
import { RGBA } from "../../types";
import { renderBackgroundImage } from "./utils";

const mask = document.createElement("div");
mask.style.cssText =
  "position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 9999; cursor: crosshair;";

const preview = document.createElement("div");
preview.style.cssText =
  "position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 9999; width: 10px; height: 10px; border: 1px solid #eee";

export const useCustomEyeDropper = () => {
  const [color, setColor] = useState<RGBA | null>(null);

  const openDropper = async (e: MouseEvent | React.MouseEvent) => {
    document.body.append(mask);

    const offscreenCanvas = await renderBackgroundImage();
    const offscreenContext = offscreenCanvas.getContext("2d")!;

    mask.append(preview);

    mask.addEventListener("mousemove", (e: MouseEvent) => {
      const { x, y } = e;
      preview.style.left = x + 5 + "px";
      preview.style.top = y + 5 + "px";

      const pixel = offscreenContext.getImageData(x, y, 1, 1).data;
      preview.style.backgroundColor = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3]})`;
    });

    mask.addEventListener("mousedown", (e: MouseEvent) => {
      const { x, y } = e;
      const [r, g, b, a] = offscreenContext.getImageData(x, y, 1, 1).data;
      setColor({ r, g, b, a });
      document.body.removeChild(mask);
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
