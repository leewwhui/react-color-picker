import React, { useState } from "react";
import { RGBA } from "../../types";
import { drawMagnifying, renderBackgroundImage } from "./utils";

const mask = document.createElement("div");
mask.style.cssText =
  "position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 9999; cursor: crosshair;";

export const useCustomEyeDropper = () => {
  const [color, setColor] = useState<RGBA | null>(null);

  const openDropper = async (e: MouseEvent | React.MouseEvent) => {
    document.body.append(mask);

    const { left, top, width, height } = mask.getBoundingClientRect();
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `position: absolute; top: ${top}px; left: ${left}px;`;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d")!;

    const offscreenCanvas = canvas.cloneNode() as HTMLCanvasElement;
    const offscreenContext = offscreenCanvas.getContext("2d");

    const image = await renderBackgroundImage();

    const { clientWidth, clientHeight } = document.body;
    offscreenContext!.drawImage(image, 0, 0, clientWidth, clientHeight);
    mask.append(canvas);

    drawMagnifying(canvas, context, offscreenCanvas, e);

    mask.addEventListener("mousemove", (e: MouseEvent) => {
      if (!image) return;
      drawMagnifying(canvas, context, offscreenCanvas, e);
    });

    mask.addEventListener("mousedown", (e: MouseEvent) => {
      const [r, g, b, a] = context.getImageData(e.x, e.y, 1, 1).data;
      context.clearRect(0, 0, canvas.width, canvas.height);
      offscreenContext?.clearRect(
        0,
        0,
        offscreenCanvas.width,
        offscreenCanvas.height
      );
      setColor({ r, g, b, a });
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
