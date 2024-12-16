import ChildA from "./ChildA.jsx";

function App(){
  const LINK = "https://jsonplaceholder.typicode.com/users/"
  return (
    <>
      <ChildA link={LINK} />
    </>
  );
}

export default App;