import { useState } from 'react';
import Questions from '../../components/questions';
import './calculator.scss';

const Calculator = () => {
  const [result, setResult] = useState('');

  return (
    <>
      <h1 className="header">Calculator</h1>
      <div className="App">
        <header className="App-header">
          <p>
            Always wondered what type of apple you were?
            <br />
            Today is the day you find out!
          </p>
        </header>
        <Questions setResult={setResult} />
        <p className="result">{result}</p>
      </div>
    </>
  );
};

export default Calculator;
