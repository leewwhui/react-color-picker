import "./App.css";
import { ReactColorPicker } from "./components/react-color-picker";

function App() {
  return (
    <div>
      <div style={{ width: 200, height: 200, backgroundColor: "orange" }}></div>
      <ReactColorPicker></ReactColorPicker>
    </div>
  );
}

export default App;
