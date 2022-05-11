import { useInsertionEffect, useState } from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(1);
  const [fizzbuzz, setFizzbuzz] = useState(number);

  useInsertionEffect(() => {
    if (number % 3 === 0 && number % 5 === 0) {
      setFizzbuzz("fizzbuz")
    } else if (number % 3 === 0) {
      setFizzbuzz("fizz")
    } else if (number % 5 === 0) {
      setFizzbuzz("buzz")
    } else {
      setFizzbuzz(number);
    }
  }, [number])

  const handleInc = () => {
    setNumber(number + 1);
  }

  const handleDec = () => {
    setNumber(number - 1);
  }

  return (
    <>
      <button value={number} onClick={handleInc}>+ Add</button>
      <button value={number} onClick={handleDec}>- Dec</button>
      <h2>FizzBuzz is: {fizzbuzz}</h2>
    </>
  );
}

export default App;
