import React, { useState } from 'react';
import './Calculator.scss';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setInput(input + number);
  };

  const handleOperatorClick = (operator) => {
    if (input !== '') {
      setInput(input + operator);
    }
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleResetInput = () => {
    setInput('');
  };

  const handleResetResult = () => {
    setResult('');
  };

  return (
    <div className="calculator">
      <div className="input">{input}</div>
      <div className="result">{result}</div>
      <div className="buttons">
        {[1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0].map((value) => (
          <button key={value} onClick={() => value !== '+' && value !== '*' ? handleNumberClick(value.toString()) : handleOperatorClick(value)}>
            {value}
          </button>
        ))}
        <button onClick={handleResetInput}>C</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
        <button onClick={handleResetResult}>AC</button>
      </div>
    </div>
  );
};

export default Calculator;
