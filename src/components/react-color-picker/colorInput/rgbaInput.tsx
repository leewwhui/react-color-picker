import { FC } from "react";
import styles from "./input.module.less";
import { RGBA } from "../types";

const InputCell: FC<{ value: number; label: string }> = (props) => {
  const { value, label } = props;

  return (
    <div className={styles["input-cell"]}>
      <input value={value} onChange={() => {}} />
      <span>{label}</span>
    </div>
  );
};

interface RgbaInputInterface {
  rgba: RGBA;
}

export const RgbaInput: FC<RgbaInputInterface> = (props) => {
  const { rgba } = props;
  return (
    <div className={styles["input-container"]}>
      <InputCell value={rgba.r} label="R"></InputCell>
      <InputCell value={rgba.g} label="G"></InputCell>
      <InputCell value={rgba.b} label="B"></InputCell>
      <InputCell value={Math.floor(rgba.a * 100)} label="A"></InputCell>
    </div>
  );
};
