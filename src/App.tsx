import { useState } from "react";
import "./App.css";
import { ReactColorPicker } from "./components/react-color-picker";

function App() {
  const [color, setColor] = useState("b5cc51");
  return (
    <div>
      <div style={{ width: 200, height: 200, backgroundColor: "orange" }}></div>
      <ReactColorPicker
        color={color}
        onChange={(colors) => setColor(colors.hex)}
      ></ReactColorPicker>
    </div>
  );
}

export default App;
