import React, { useState } from "react";

const Calculator = () => {
  const [value, setValue] = useState("0");
  const [operator, setOperator] = useState(null);

  const handleClick = (e) => {
    const btnValue = e.target.innerText;
    if (btnValue === "C") {
      setValue("0");
      setOperator(null);
    } else if (btnValue === "+" || btnValue === "-" || btnValue === "x" || btnValue === "/") {
      setOperator(btnValue);
    } else {
      setValue(value + btnValue);
    }
  };

  return (
    <div className="calculator">
      <div className="display">{value}</div>
      <div className="buttons">
        <button onClick={handleClick}>C</button>
        <button onClick={handleClick}>7</button>
        <button onClick={handleClick}>8</button>
        <button onClick={handleClick}>9</button>
        <button onClick={handleClick}>+</button>
        <button onClick={handleClick}>4</button>
        <button onClick={handleClick}>5</button>
        <button onClick={handleClick}>6</button>
        <button onClick={handleClick}>-</button>
        <button onClick={handleClick}>1</button>
        <button onClick={handleClick}>2</button>
        <button onClick={handleClick}>3</button>
        <button onClick={handleClick}>x</button>
        <button onClick={handleClick}>0</button>
        <button onClick={handleClick}>.</button>
        <button onClick={handleClick}>=</button>
        <button onClick={handleClick}>/</button>
      </div>
    </div>
  );
};

export default Calculator;