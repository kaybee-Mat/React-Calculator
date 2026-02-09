import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [display, setDisplay] = useState('');

  const appendToDisplay = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      setDisplay(eval(display));
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div id="calculator">
      <input id="display" value={display} readOnly />
      <div id="keys">
        <button onClick={() => appendToDisplay('+')} className="operator-btn">+</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('-')} className="operator-btn">-</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('*')} className="operator-btn">*</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('/')} className="operator-btn">/</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')} className="operator-btn">.</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearDisplay} className="operator-btn">C</button>
      </div>
    </div>

  );
}




export default App
