import React, { FC, useMemo, useRef } from "react";
import { calculateHue } from "../util/hue_helper";
import styles from "./hue.module.less";

interface HueInterface {
  hue: number;
  onHueChange: (hue: number) => void;
}

export const Hue: FC<HueInterface> = (props) => {
  const { hue, onHueChange } = props;
  const hueRef = useRef<HTMLDivElement>(null);

  const huePosition = useMemo(() => {
    return { x: (hue / 360) * 100 };
  }, [hue]);

  const updateHue = (e: React.MouseEvent | MouseEvent) => {
    if (!hueRef || !hueRef.current) return;
    onHueChange(calculateHue(e, hueRef.current));
  };

  const handleHueMouseDown = (e: React.MouseEvent) => {
    updateHue(e);
    document.addEventListener("mousemove", updateHue);
    document.addEventListener("mouseup", handleHueMouseUp);
  };

  const handleHueMouseUp = (e: MouseEvent) => {
    document.removeEventListener("mousemove", updateHue);
    document.removeEventListener("mouseup", handleHueMouseUp);
  };

  return (
    <div
      className={styles["color-picker-hue"]}
      ref={hueRef}
      onMouseDown={handleHueMouseDown}
    >
      <div
        className={styles["color-picker-hue_cursor"]}
        style={{
          left: huePosition.x + "%",
          backgroundColor: `hsl(${hue}, 100%, 50%)`,
        }}
      ></div>
    </div>
  );
};
