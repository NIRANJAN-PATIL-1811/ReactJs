import { createContext, useEffect, useState } from "react";

export const MyContext = createContext();

function Context({children, data, age, link}){

  const [ initialVal, changeVal ] = useState([]);

  useEffect(() => {
    fetch(link)
      .then((var1) => var1.json())
      .then((var2) => changeVal(var2))
  },[]);
  
  return (
    <>
      <MyContext.Provider value={{data, age, initialVal}}>
        {children}
      </MyContext.Provider>
    </>
  );
}

export default Context;