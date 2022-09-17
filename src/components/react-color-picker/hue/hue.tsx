import React, { FC, useMemo, useRef, useState } from "react";
import { HSVA } from "../types";
import { calculateHue } from "../util/hue_helper";
import styles from "./hue.module.less";

interface HueInterface {
  hsva: HSVA;
  onChange: (hsva: HSVA) => void;
}

export const Hue: FC<HueInterface> = (props) => {
  // const [isCursorRight, setIsCursorRight] = useState<boolean>(false);

  const { hsva, onChange } = props;
  const hue = hsva.h;
  const hueRef = useRef<HTMLDivElement>(null);

  const huePosition = useMemo(() => {
    // if (isCursorRight) return 100;
    return (hue / 360) * 100;
  }, [hue]);

  const updateHue = (e: React.MouseEvent | MouseEvent) => {
    if (!hueRef || !hueRef.current) return;
    const hue = calculateHue(e, hueRef.current);
    // if (hue === 360) setIsCursorRight(true);
    // else setIsCursorRight(false);
    onChange({ ...hsva, h: calculateHue(e, hueRef.current) });
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
          left: huePosition + "%",
          backgroundColor: `hsl(${hue}, 100%, 50%)`,
        }}
      ></div>
    </div>
  );
};
