import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  // ? first variation of useEffect -> every render
  // useEffect(() => {
  //   console.log("Console Rendering done..!");
  // });

  //? second variation -> first render
  // useEffect(() => {
  //   console.log("Console Rendering done...");
  // },   []);

  //? third  variation -> first render + whenever dependency changes...
  // useEffect(() => {
  //   console.log("text changed observed...");
  // }, [text]);

  //? fourth  variation -> to handle unmounting of component...
  useEffect(() => {
    console.log("listener added.."); //! this runs second...
    return () => {
      console.log("listener removed...."); //! this runs first
    };
  }, [text]);

  const changeHandler = (event) => {
    // event.preventDefault();
    setText(event.target.value);
    console.log(text);
  };
  return (
    <div className="App">
      <input type="text" onChange={changeHandler} />
    </div>
  );
}

export default App;
