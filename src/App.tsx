import "./App.css";
import { ReactColorPicker } from "./components/react-color-picker";

function App() {
  return (
    <div>
      <ReactColorPicker
        color={{ r: 255, g: 255, b: 255, a: 0.2 }}
        width={400}
      ></ReactColorPicker>
    </div>
  );
}

export default App;
