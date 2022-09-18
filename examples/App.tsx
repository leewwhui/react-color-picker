import { Fragment, useState } from "react";
import { ReactColorPicker } from "../src/index";
import "./App.css";

function App() {
  const [color, setColor] = useState({ r: 123, g: 123, b: 123, a: 0.5 });

  return (
    <Fragment>
      <div className="container">
        <h1 className="title">React Color Pane</h1>
        <div className="picker">
          <ReactColorPicker
            color={color}
            onChange={(colors: any) => setColor(colors.rgba)}
          ></ReactColorPicker>
        </div>
      </div>

      <div
        style={{
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        }}
        className="background"
      ></div>
    </Fragment>
  );
}

export default App;
