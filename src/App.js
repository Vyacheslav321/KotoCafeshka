import { useState, useEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(0);

  useEffect(() => {
    setInterval(() => console.log(counterRef.current), 1000);
  }, []);

  function count() {
    counterRef.current++;
    setCounter(counterRef.current);
  }

  return (
    <div className="App">
      <h1> {counter} </h1>
      <button onClick={count}>counter</button>
    </div>
  );
}
