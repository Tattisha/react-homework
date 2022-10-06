import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="App">
        <h3>Worldwide weather forecast</h3>
        <form>
          <input type="search" placeholder="Enter a city.." />
          <button type="Submit">Search</button>
        </form>
        <div className="city">Antalya</div>
        <div className="date">Monday 11:20</div>
        <div className="row">
          <div className="col-6">
            <div className="icon">🌤</div>
            <div className="temp">
              <h2>15°C</h2>
            </div>
          </div>
          <div className="col-6">
            <div className="humidity">Humidity: 50%</div>
            <div className="wind">Wind: 2km/h</div>
          </div>
        </div>
        <div className="forecastIcons">
          <div className="row">
            <div className="col-2">⛅</div>
            <div className="col-2">🌧</div>
            <div className="col-2">☀</div>
            <div className="col-2">⛈</div>
            <div className="col-2">🌤</div>
          </div>
        </div>
      </div>
      <div>
        <p>Open-source code by Tetiana Shapovalova</p>
      </div>
    </div>
  );
}
export default App;
