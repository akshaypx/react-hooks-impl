import "./App.css";
import UseStateHook from "./components/UseStateHook";
import UseReducerHook from "./components/UseReducerHook";
import UseEffectHook from "./components/UseEffectHook";
import UseRefHook from "./components/UseRefHook";
import UseImperativeHook from "./components/UseImperativeHook/UseImperativeHook";

function App() {
  return (
    <>
      <UseStateHook />
      <UseReducerHook />
      <UseEffectHook />
      <UseRefHook />
      <UseImperativeHook />
    </>
  );
}

export default App;
