import { useState, createContext } from "react";
import Child from "./Child";

export const MyContext = createContext();

function Parent(){

  const [initiaVal, changeFun] = useState("");
  
  function handleOnKeyDown(event){
    if (event.key === "Enter"){
      changeFun(event.target.value);
    }
  }

  return (
    <>
      <input type="text" onKeyDown={handleOnKeyDown} placeholder="Enter your username"/>
      <MyContext.Provider value={initiaVal}>
        <Child/>
      </MyContext.Provider>
    </>
  );
}

export default Parent;