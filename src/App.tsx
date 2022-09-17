import "./App.css";
import { ReactColorPicker } from "./components/react-color-picker";

function App() {
  return (
    <div>
      <div style={{ width: 200, height: 200, backgroundColor: "orange" }}></div>
      <ReactColorPicker
        color={{ r: 255, g: 255, b: 255, a: 0.2 }}
        // width={300}
      ></ReactColorPicker>
    </div>
  );
}

export default App;
