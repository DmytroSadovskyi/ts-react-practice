import "./App.css";
import { Route, Routes } from "react-router-dom";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import Counter from "./components/Counter/Counter";
import CounterFn from "./components/Counter/CounterFn";
import Form from "./components/Form/Form";
import Home from "./components/Home";
import SharedLayout from "./components/SharedLayout";

const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/counterFn" element={<CounterFn />} />
          <Route
            path="/colorpicker"
            element={<ColorPicker options={colorPickerOptions} />}
          />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
