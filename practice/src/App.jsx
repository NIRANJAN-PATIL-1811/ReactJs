import { useState, useCallback } from 'react';
import ChildA from './ChildA';

function App() {
  const [initialVal2, changeVal2] = useState(0);

  function getData2() {
    changeVal2((in2) => in2 + 1);
  }

  const getData = useCallback(() => {
    // some code
  }, [initialVal2]);

  return (
    <>
      <ChildA getData={getData} />

      <h1>{initialVal2}</h1>
      <button onClick={getData2}>Click me 1</button>
    </>
  );
}

export default App;