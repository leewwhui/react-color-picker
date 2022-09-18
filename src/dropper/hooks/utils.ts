import { toPng } from "html-to-image";

export const drawMagnifying = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  offscreenCanvas: HTMLCanvasElement,
  e: MouseEvent | React.MouseEvent
) => {
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

  context.drawImage(offscreenCanvas, sx, sy, mr, mr, dx, dy, 2 * mr, 2 * mr);

  context.restore();
};

export const renderBackgroundImage = (): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    toPng(document.body, { backgroundColor: "white" }).then((url) => {
      const image = new Image();
      image.src = url;
      image.onload = () => {
        resolve(image);
      };
    });
  });
};
