import { useState } from "react";
import { useRef } from "react";
function App() {
  const plus = () => {
    setResult(result + Number(inputRef.current.value));
  };
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <p>{result}</p>
      <input ref={inputRef} placeholder="type your name" /> <br />
      <button onClick={plus}>ADD</button>
    </div>
  );
}

export default App;
