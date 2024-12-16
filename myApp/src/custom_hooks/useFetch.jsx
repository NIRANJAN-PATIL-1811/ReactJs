import { createContext } from "react";

export const MyContext = createContext();

function Custom({ content, link }){

  return (
    <>
      <MyContext.Provider value={link}>
        {content}
      </MyContext.Provider>
    </>
  );
}

export { Custom };