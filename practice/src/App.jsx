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
    </>
  );
}

export default App;