import {useRef} from "react";

function App(){
  let firstInputValue = useRef();
  let secondInputValue = useRef();

  let print_data = (event) => {
    event.preventDefault();
    console.log(`${firstInputValue.current.value} on ${secondInputValue.current.value}`);
  }
  return (
    <>
      <form>
        <input type="text" placeholder="Enter your text..." ref={firstInputValue}/>
        <input type="date" ref={secondInputValue}/>
        <button onClick={print_data}>Submit</button>
      </form>
    </>
  );
}

export default App;