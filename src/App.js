import React, { useState } from 'react';
import './index.css'

const api = {
  key: "4e26469eb587d0e30e0d80f1415e8b14",
  base: "http://api.openweathermap.org/data/2.5/"
}

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {

      setQuery('London');
      fetch(`${api.base}weather?q=${query}&id=524901&appid=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);  
          console.log(result);
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
        {dateBuilder(new Date())}

        <button onClick={search}>Mudar</button>
        São Paulo City
        15º
        Sunny
      </div>
    </div>
  );
}

export default App;
