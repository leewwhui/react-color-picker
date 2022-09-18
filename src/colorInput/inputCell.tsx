import React, { FC, useEffect } from "react";
import styles from "./input.module.less";

interface InputCellInterface {
  value: number;
  label: string;
  onChange: (value: number) => void;
}

export const InputCell: FC<InputCellInterface> = (props) => {
  const { value, label, onChange } = props;
  let prevX: number | null = null;

  const handleMouseDown = (e: React.MouseEvent) => {
    prevX = e.clientX;
    document.body.style.cursor = "ew-resize";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (prevX) {
      const diff = e.clientX - prevX;
      onChange(value + diff);
    }
  };

  const handleMouseUp = () => {
    document.body.style.cursor = "default";
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles["input-cell"]}>
      <input value={value} onChange={(e) => onChange(Number(e.target.value))} />
      <span onMouseDown={handleMouseDown}>{label}</span>
    </div>
  );
};
