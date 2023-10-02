import "./App.css";
import { useState } from "react";
import { useRef } from "react";
function App() {
  const plus = () => {
    setResult(result + Number(inputRef.current.value));
  };
  const minus = () => {
    setResult(result - Number(inputRef.current.value));
  };
  const multiply = (e) => {
    setResult(result * Number(inputRef.current.value));
  };
  const divide = () => {  
    setResult(result / Number(inputRef.current.value));
  };
  const reset = () => {
    setResult((prev) => prev * 0);
  };
  const resetInput = (e) => {
    e.preventDefault;
    inputRef.current.value = 0;
  };
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  return (
    <div className="App">
      <h1>A SIMPLE ARITHMETIC CALCULATOR</h1>
      <p ref={resultRef}>
        <b>RESULT:</b> {result}
      </p>
      <input ref={inputRef} placeholder="input the number" /> <br />
      <button onClick={plus}>ADD</button>
      <button onClick={minus}>MINUS</button>
      <button onClick={multiply}>MULTIPLY</button>
      <button onClick={divide}>DIVIDE</button>
      <button onClick={reset}>Reset Result</button>
      <button onClick={resetInput}>Reset Input</button>
    </div>
  );
}

export default App;
