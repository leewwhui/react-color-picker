import { useState } from "react";
import "./App.css";
import { ReactColorPicker } from "./components/react-color-picker";

function App() {
  const [color, setColor] = useState({ r: 123, g: 123, b: 123, a: 0.5 });

  return (
    <div>
      <div
        style={{
          width: 200,
          height: 200,
          background: `linear-gradient(#e66465, #9198e5)`,
        }}
      ></div>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
        }}
      ></div>
      <ReactColorPicker
        color={color}
        onChange={(colors) => {
          setColor(colors.rgba);
        }}
      ></ReactColorPicker>
    </div>
  );
}

export default App;
