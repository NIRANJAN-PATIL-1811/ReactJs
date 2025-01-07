import "./App.css";
import axios from "axios";
import { useState } from "react";


function App(){

  const [ initialVal, changeVal ] = useState([]);

  function getJoke(){
    async function data(){
      await axios.get("https://official-joke-api.appspot.com/random_joke")
      .then((res) => changeVal(res.data))
      .catch((error) => console.log(error))
    }
    data();
  }
  function getData(){
    getJoke();
  }
  return (
    <>
      <center>
        <div className="main-div">
          <div className="joke-div">John : {initialVal.setup}</div>
          <div className="joke-div-2">Nick : {initialVal.punchline}</div>
          <div className="btn-div">
            <button onClick={() => getData()} className="btn btn-success">Next</button>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;