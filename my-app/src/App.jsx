import { useState, useRef } from "react";
import Child from "./Child.jsx";

function App() {
  const [info, changeVal] = useState([]);
  const firstInput = useRef();
  const secondInput = useRef();

  function onClickDelete(item) {
    console.log(item);
    const final_val = info.filter((data) => data.Name != item);
    console.log(final_val);
    changeVal(final_val);
  }

  function getData() {
    changeVal([
      ...info,
      {
        Name: firstInput.current.value,
        Date: secondInput.current.value,
      },
    ]);
    // console.log(eval(firstInput.current.value));
    // console.log(eval("8+5"));
    firstInput.current.value = "";
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input type="text" placeholder="Enter your task" ref={firstInput} />
          </div>
          <div className="col-4">
            <input type="date" ref={secondInput} />
          </div>
          <div className="col-4">
            <button onClick={getData}>Add</button>
          </div>
          <Child info={info} onClickDelete={onClickDelete} />
        </div>
      </div>
    </>
  );
}

export default App;
