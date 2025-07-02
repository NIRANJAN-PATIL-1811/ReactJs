import axios from 'axios';
import { useState, useRef } from 'react';
import "./App.css";

// 0c611cc00c95aa9eb3a6c339a57246e0

function App(){
  const myRef = useRef();

  const [ initialVal, changeVal ] = useState([]);

  function getWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${myRef.current.value}&appid=0c611cc00c95aa9eb3a6c339a57246e0`;
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=0c611cc00c95aa9eb3a6c339a57246e0`;
    async function getCurrentData(){
      await axios.get(url)
      .then((res) => changeVal(res.data))
    }

    getCurrentData()
  }

  function getData(){
    getWeather();
  }

  return (
    <>
      <div>
        <center>
          <div className={`main-div ${initialVal == '' ? 'summer' : 
            initialVal.weather[0].description == 'clear sky' ? 'clear_sky' : 
            initialVal.weather[0].description == 'overcast clouds' ? 'overcast_cloud' : 
            initialVal.weather[0].description == 'broken clouds' ? 'broken_cloud' : 
            initialVal.weather[0].description == 'scattered clouds' ? 'scattered_cloud' :
            initialVal.weather[0].description == 'shower rain' ? 'shower_rain' :
            initialVal.weather[0].description == 'mist' ? 'mist' :
            initialVal.weather[0].description == 'haze' ? 'haze' :
            initialVal.weather[0].description == 'fog' ? 'fog' :
            initialVal.weather[0].description == 'light snow' ? 'light_snow' :
            initialVal.weather[0].description == 'few clouds' ? 'few_cloud' :
            initialVal.weather[0].description == 'snow' ? 'snow' :
            initialVal.weather[0].description == 'light rain' ? 'light_rain' :
            initialVal.weather[0].description == 'moderate rain' ? 'moderate_rain' :
            initialVal.weather[0].description == 'smoke' ? 'smoke' :
            null}`}>
            <div className={'input-btn'}>
              <input ref={myRef} className="form-control" type="text" placeholder="Enter place"></input>
              <button onClick={() => getData()} type="button" className="btn btn-success">Get</button>
            </div>
            <div className="bottom-div">
              <div className="div-1 childA">
                <div className="humidity-div">Humidity
                  <div className="humidity-div-1 humidity-div-1-A">{initialVal.main ? initialVal.main.humidity + " %" : "N/A"}</div>
                </div>
              </div>
              <div className="div-2 childA">
                <div className="description-div">Description
                  <div className="description-div-1 humidity-div-1-A">{initialVal.main ? initialVal.weather[0].description : "N/A"}</div>
                </div>
              </div>
              <div className="div-3 childA">
                <div className="temperature-div">Temperature
                  <div className="temperature-div-1 humidity-div-1-A">{initialVal.main ? (initialVal.main.temp - 273.15).toFixed(2) + " °C" : "N/A"}</div>
                </div>
              </div>
              <div className="div-4 childA">
                <div className="visibility-div">Visibility
                  <div className="visibility-div-1 humidity-div-1-A">{`${initialVal.main ? (initialVal.visibility / 1000) + ' km' : "N/A"}`}</div>
                </div>
              </div>
              <div className="div-5 childA">
                <div className="pressure-div">Pressure
                  <div className="pressure-div-1 humidity-div-1-A">{initialVal.main ? (((initialVal.main.pressure) / 1013.25) * 14.696).toFixed(2) + ' psi' : "N/A"}</div>
                </div>
              </div>
            </div>
          </div>
        </center> 
      </div>  
    </>
  );
}

export default App;