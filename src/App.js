import React, { useState } from 'react';
import usePreviousState from './components/hooks/usePreviousState'
// import logo from './logo.svg';
import './App.scss';

function App() {
  const [counter, setCounter] = useState(0);
  const previous = usePreviousState(counter);
  console.log(previous);

  return (
    <div className="App">
      <h2>counter Val:{counter}</h2>
      <h3>Previous State:{previous.current.map((num, i) => (
        <button key={`${num}_${i}`} onClick={() => setCounter(num)}>{num}</button>
      ))}</h3>
      <button onClick={() => setCounter(counter + 1)}>Counter Button</button>

    </div>
  );

}

export default App;
