import { useEffect, useState } from "react";
import { toPng, toJpeg } from "html-to-image";
import { RGBA } from "../../types";

const mask = document.createElement("div");
mask.style.cssText =
  "position: fixed; top: 0; left: 0; bottom: 0; right: 0; z-index: 9999; cursor: crosshair;";

export const useCustomEyeDropper = () => {
  const [color, setColor] = useState<RGBA | null>(null);

  const renderImage = (): Promise<HTMLImageElement> => {
    return new Promise((resolve) => {
      toJpeg(document.body).then((url) => {
        const image = new Image();
        image.src = url;
        image.onload = () => {
          resolve(image);
        };
      });
    });
  };

  const openDropper = async () => {
    document.body.append(mask);

    const { left, top, width, height } = mask.getBoundingClientRect();
    const canvas = document.createElement("canvas");
    canvas.style.cssText = `position: absolute; top: ${top}px; left: ${left}px;`;
    canvas.width = width;
    canvas.height = height;
    const context = canvas.getContext("2d")!;

    const offscreenCanvas = canvas.cloneNode() as HTMLCanvasElement;
    const offscreenContext = offscreenCanvas.getContext("2d");

    const image = await renderImage();

    const { clientWidth, clientHeight } = document.body;
    offscreenContext!.drawImage(image, 0, 0, clientWidth, clientHeight);
    mask.append(canvas);

    mask.addEventListener("mousemove", (e: MouseEvent) => {
      if (!image) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      const x = e.clientX;
      const y = e.clientY;

      context.save();
      context.beginPath();
      const mr = canvas.height * 0.1;

      const imageX = x - mr / 2;
      const imageY = y - mr / 2;

      const sx = imageX;
      const sy = imageY;

      const dx = x - mr;
      const dy = y - mr;

      context.arc(x, y, mr, 0, Math.PI * 2, true);
      context.strokeStyle = "white";
      context.lineWidth = 6;

      context.stroke();
      context.closePath();
      context.clip();

      context.drawImage(
        offscreenCanvas,
        sx,
        sy,
        mr,
        mr,
        dx,
        dy,
        2 * mr,
        2 * mr
      );

      context.restore();
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
