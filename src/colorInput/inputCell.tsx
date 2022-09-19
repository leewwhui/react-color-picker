import React from "react";
import {inputCell} from './input.style';

interface InputCellInterface {
  value: number;
  label: string;
  max?: number;
  onChange: (value: number) => void;
}

export class InputCell extends React.Component<InputCellInterface> {
  constructor(props: InputCellInterface) {
    super(props)
  }

  handleMouseDown = () => {
    document.body.style.cursor = 'ew-resize';
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (e: MouseEvent) => {
    const {value, max = 255} = this.props;
    const newValue = value + e.movementX;
    if (newValue > max || newValue < 0) return;
    this.props.onChange(newValue);
  }

  handleMouseUp = () => {
    document.body.style.cursor = "default";
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
  }

  render() {
    return (
    <div className={inputCell}>
      <input value={this.props.value} onChange={(e) => this.props.onChange(Number(e.target.value))} />
      <span onMouseDown={this.handleMouseDown}>{this.props.label}</span>
    </div>
    )
  }
}
