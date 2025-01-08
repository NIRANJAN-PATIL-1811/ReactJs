import "./css/App.css";
import List from "./list.jsx";
import Cal from "./cal.jsx";


function App(){
  return (
    <>
      <div className="main-div">
        <List></List>
        <Cal></Cal>
      </div>
    </>
  );
}

export default App;