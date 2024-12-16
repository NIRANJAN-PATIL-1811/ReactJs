import { useContext } from "react";
import { MyContext } from "./context/Context";

function ChildC(){

  const {data, age, initialVal} = useContext(MyContext);
  
  return (
    <>
      {data} | {age}
      {
        initialVal.map((item, index) => <h1 key={index}>{item.id} | {item.name}</h1>)
      }  
    </>
  );
}

export default ChildC;