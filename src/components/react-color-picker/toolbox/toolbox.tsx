import React, { FC, useMemo, useRef } from "react";
import { calculateHue } from "../util/hue_helper";
import styles from "./toolbox.module.less";

interface ColorToolBoxInterface {
  hue: number;
  // transparent: number;
  onHueChange: (hue: number) => void;
  // onTransparentChange: () => void;
}

export const ColorToolBox: FC<ColorToolBoxInterface> = (props) => {
  const { hue, onHueChange } = props;
  const hueRef = useRef<HTMLDivElement>(null);

  const huePosition = useMemo(() => {
    if (!hueRef || !hueRef.current) return { x: 0 };
    const width = hueRef.current.getBoundingClientRect().width;
    return { x: (hue / 360) * width };
  }, [hue]);

  const handleHueMouseDown = (e: React.MouseEvent) => {
    if (!hueRef || !hueRef.current) return;
    onHueChange(calculateHue(e, hueRef.current));
    document.addEventListener("mousemove", handleHueMouseMove);
    document.addEventListener("mouseup", handleHueMouseUp);
  };

  const handleHueMouseMove = (e: MouseEvent) => {
    if (!hueRef || !hueRef.current) return;
    onHueChange(calculateHue(e, hueRef.current));
  };

  const handleHueMouseUp = (e: MouseEvent) => {
    if (!hueRef || !hueRef.current) return;
    onHueChange(calculateHue(e, hueRef.current));
    document.removeEventListener("mousemove", handleHueMouseMove);
    document.removeEventListener("mouseup", handleHueMouseUp);
  };

  return (
    <div style={{ flex: 1, height: "100%", width: "100%" }}>
      <div
        className={styles["color-picker-hue"]}
        ref={hueRef}
        onMouseDown={handleHueMouseDown}
      >
        <div
          className={styles["color-picker-hue_cursor"]}
          style={{
            left: huePosition.x,
          }}
        ></div>
      </div>

      <div className={styles["color-picker-transparent"]}>
        <div
          className={styles["color-picker-transparent-hue"]}
          style={{
            backgroundImage: `linear-gradient(to right, transparent, hsl(${hue}, 100%, 50%))`,
          }}
        ></div>
      </div>
    </div>
  );
};
