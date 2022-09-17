import { useEffect, useState } from "react";
import "./App.css";
import { ReactColorPicker } from "./components/react-color-picker";

function App() {
  const [color, setColor] = useState("b5cc51");

  useEffect(() => {
    // console.log(color);
  }, [color]);

  return (
    <div>
      <div
        style={{ width: 200, height: 200, backgroundColor: `#${color}` }}
      ></div>
      <ReactColorPicker
        color={color}
        onChange={(colors) => {
          setColor(colors.hex);
        }}
      ></ReactColorPicker>
    </div>
  );
}

export default App;
