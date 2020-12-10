import React, { useState, useEffect } from 'react';
import './index.css'

const api = {
  key: "4e26469eb587d0e30e0d80f1415e8b14",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  useEffect(() => {
    changeCity("São Paulo")
  });

  function changeCity(city){
      setQuery(city);
      fetch(`${api.base}weather?q=${query}&units=metric&id=524901&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);  
          console.log(result);
          setQuery('');
        })
  }

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  return (
    <div className="app sunny">
      <div className="gradient-background">
      {(typeof weather.main != "undefined") ? (
        <div className="weather-container">
          <p className="date">{dateBuilder(new Date())}</p>
          <p className="city-name">{weather.name}</p>
          <p className="degrees">{Math.round(weather.main.temp)}ºC</p>
          <p className="weather-name">{weather.weather[0].main}</p>
        </div>
      ) : ('')}
        <button onClick={() => changeCity("Roma")}>Roma</button>
        <button onClick={() => changeCity("London")}>São Paulo</button>
        <button onClick={() => changeCity("Tokyo")}>Tokyo</button>
        <button onClick={() => changeCity("Tokyo")}>New York</button>
      </div>

    </div>
  );
}


export default App;
