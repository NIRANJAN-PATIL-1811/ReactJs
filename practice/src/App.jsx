<<<<<<< HEAD
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
=======
import axios from "axios";
import { useState, useEffect } from "react";


function App(){
  const [ initialVal, changeVal ] = useState([]);

  console.log(initialVal);
  const myFilter = initialVal.filter((item) => item.address.city == 'Gwenborough');
  
  useEffect(() => {
    async function getData(){
      await axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => changeVal(res.data))
      .catch((error) => console.error(`Error => ${error}`))
    }
    getData();
  }, []);
  
  return (
    <>
      {
        myFilter.map((item, index) => (<h1 key={index} >{item.name} | {item.id}</h1>))
        // initialVal.map((item, index) => (item.address.city == 'Gwenborough' ? <h1 key={index} >{item.id} | {item.name} | {item.email} | {item.phone}</h1> : null))
      }
>>>>>>> 8932159f88639663baf93d5c0d25b4a35ad6d8c5
    </>
  );
}

export default App;