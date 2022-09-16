import { FC } from "react";
import styles from "./input.module.less";

interface InputCellInterface {
  value: number;
  label: string;
  step?: number;
  max?: number;
  onChange: (value: number) => void;
}

export const InputCell: FC<InputCellInterface> = (props) => {
  const { value, label, onChange, step = 1, max = 255 } = props;

  return (
    <div className={styles["input-cell"]}>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <span>{label}</span>
    </div>
  );
};
