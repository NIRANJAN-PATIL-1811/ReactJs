import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";


function App(){

  const [ initialVal, changeVal ] = useState([]);
  const [ initialCount, changeCount ] = useState(1);

  useEffect(() => {
    async function getData(){
      await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${initialCount}&_limit=10`)
      .then((res) => changeVal(res.data))
      .catch((error) => console.log(error))
    }

    getData();
  }, [initialCount]);

  return (
    <>
      <center>
        <div className="main-div">
          <div className="comment-div">
            {initialVal == "" ? null : console.log(typeof initialVal)}
          </div>
          <div className="btn-div">
            <button onClick={() => changeCount(initialCount - 1)} className="btn btn-success">Prev</button>
            <button onClick={() => changeCount(initialCount + 1)} className="btn btn-success">Next</button>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;