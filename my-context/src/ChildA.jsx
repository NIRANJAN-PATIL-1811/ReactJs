import Context from "./context/Context.jsx";
import ChildB from "./ChildB.jsx";

function ChildA({link}){
  
  const NAME = "Niranjan Patil";
  const AGE = 24;

  return (
    <>
      <Context data={NAME} age={AGE} link={link} >
        <ChildB/>
      </Context>
    </>
  );
}

export default ChildA;