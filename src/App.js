import './App.css';
import { useState } from 'react'


function App() {

  const [result, setResult] = useState("");

  const handleClick = (e) => {
    // if (["/","+","-","*"].some(e.target.name)){
    //     console.log("ss");
    // }
    //== "/" || e.target.name == "+" || e.target.name == "-" || e.target.name == "*"
const last = result.charAt(result.length - 1);
    if (e.target.name == "/" || e.target.name == "+" || e.target.name == "-" || e.target.name == "*" || e.target.name == "."){
      if(last.includes("/") || last.includes("+") || last.includes("-") || last.includes("*") || last.includes(".")) {
        return;
      }
  }
    setResult(result.concat(e.target.name));
  }

  const clear = () => {
    setResult("");
  }

  const backspace = () => {
    setResult(result.slice(0, -1));
  }

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch(err) {
      setResult("Error");
    }
  }

  return <div className="container">
    <div className="wrapper">
      <div className="screen">{result}</div>
      <button id="clear" onClick={clear} className="btn AC">AC</button>
      <button id="backspace" onClick={backspace} className="btn DEL">DEL</button>
      <button name="/" onClick={handleClick} className="btn orange">/</button>
      <button name="7" onClick={handleClick} className="btn">7</button>
      <button name="8" onClick={handleClick} className="btn">8</button>
      <button name="9" onClick={handleClick} className="btn">9</button>
      <button name="*" onClick={handleClick} className="btn orange">X</button>
      <button name="4" onClick={handleClick} className="btn">4</button>
      <button name="5" onClick={handleClick} className="btn">5</button>
      <button name="6" onClick={handleClick} className="btn">6</button>
      <button name="+" onClick={handleClick} className="btn orange">+</button>
      <button name="1" onClick={handleClick} className="btn">1</button>
      <button name="2" onClick={handleClick} className="btn">2</button>
      <button name="3" onClick={handleClick} className="btn">3</button>
      <button name="-" onClick={handleClick} className="btn orange">-</button>
      <button name="0" onClick={handleClick} className="btn">0</button>
      <button name="." onClick={handleClick} className="btn">.</button>
      <button id="result" onClick={calculate} className="btn orange">=</button>
    </div>
  </div>

}

export default App;
