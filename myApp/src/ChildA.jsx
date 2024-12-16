import { MyContext } from "./custom_hooks/useFetch.jsx";
import { useState, useEffect, useContext } from "react";


function ChildA(){
  const data = useContext(MyContext);

  const [initialVal, changeVal] = useState([]);

  useEffect(() => {
    fetch(data)
      .then((res) => res.json())
      .then((get) => changeVal(get))
  }, []);

  return (
    <>
      <ul>
        {
          initialVal.map((item, index) => (
            <li key={index}>{item.id} and {item.name}</li>
          ))
        }
      </ul>
    </>
  );
}

export default ChildA;