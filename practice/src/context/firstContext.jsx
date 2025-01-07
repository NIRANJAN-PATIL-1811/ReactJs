import { createContext } from "react";
import Child2 from "../Child2";

export const myContext = createContext();

function FirstContext({ url }){
  return (
    <>
      <myContext.Provider value={url} >
        <Child2/>
      </myContext.Provider>
    </>
  );
}

export default FirstContext;