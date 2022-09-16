import React, { FC } from "react";
import styles from "./input.module.less";
import { RGBA } from "../types";

interface InputCellInterface {
  value: number;
  label: string;
  onChange: (value: number) => void;
}

const InputCell: FC<InputCellInterface> = (props) => {
  const { value, label, onChange } = props;
  let originX: number = Infinity;

  const handleMouseDown = (e: React.MouseEvent) => {
    originX = e.clientX;
    document.body.style.cursor = "crosshire";
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const offset = e.clientX - originX;
    onChange(value + offset);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className={styles["input-cell"]}>
      <input value={value} onChange={() => {}} />
      <span onMouseDown={handleMouseDown}>{label}</span>
    </div>
  );
};

interface RgbaInputInterface {
  rgba: RGBA;
  onChangeRgba: (rgba: RGBA) => void;
}

export const RgbaInput: FC<RgbaInputInterface> = (props) => {
  const { rgba, onChangeRgba } = props;

  const onChangeR = (r: number) => {
    onChangeRgba({ ...rgba, r });
  };

  const onChangeG = (g: number) => {
    onChangeRgba({ ...rgba, g });
  };

  const onChangeB = (b: number) => {
    onChangeRgba({ ...rgba, b });
  };

  const onChangeA = (a: number) => {
    onChangeRgba({ ...rgba, a });
  };

  return (
    <div className={styles["input-container"]}>
      <InputCell value={rgba.r} label="R" onChange={onChangeR}></InputCell>
      <InputCell value={rgba.g} label="G" onChange={onChangeG}></InputCell>
      <InputCell value={rgba.b} label="B" onChange={onChangeB}></InputCell>
      <InputCell
        value={Math.floor(rgba.a * 100)}
        label="A"
        onChange={onChangeA}
      ></InputCell>
    </div>
  );
};
