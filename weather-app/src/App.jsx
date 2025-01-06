import axios from 'axios';
import { useState, useRef } from 'react';
import "./App.css";

// 0c611cc00c95aa9eb3a6c339a57246e0

function App(){
  const myRef = useRef();

  const [ initialVal, changeVal ] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${myRef.current.value}&appid=0c611cc00c95aa9eb3a6c339a57246e0`;

  function getWeather() {
    async function getCurrentData(){
      await axios.get(url)
      .then((res) => changeVal(res.data))
      .catch((error) => console.error(error))
    }

    getCurrentData();
  }

  function getData(){
    getWeather();
  }

  return (
    <>
      <div className="main-div">
        <center>
            <div>WEATHER</div>
            <div>
              <input ref={myRef} type="text" placeholder='Enter place' />
            </div>
            <div>
              <button onClick={() => getData()} >GET</button>
            </div>
            {
              console.log(initialVal)
            }
        </center>  
      </div>  
    </>
  );
}

export default App;