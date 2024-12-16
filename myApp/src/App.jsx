//Custom API making

import { Custom } from "./custom_hooks/useFetch.jsx";
import ChildA from "./ChildA.jsx";

function App(){
  const LINK = "https://jsonplaceholder.typicode.com/users/";

  return (
    <>
      <Custom content={<ChildA/>} link={LINK}></Custom>
    </>
  );
}

export default App;

