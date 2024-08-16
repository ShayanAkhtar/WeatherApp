

import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import bgImage from "./bg.jpeg";
const App = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '8637c48831fba96b73b96b21e2c8b36d'; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching the weather data:', error);
      setWeather(null);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div className="weather-app" style={{ backgroundImage: `url(${bgImage})` }}>
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button type="submit">Search</button>
    </form>
    {weather && (
      <div className="weather-info">
        <h2>{weather.name}</h2>
        <p>Temperature: {weather.main.temp}°C</p>
        <p>Weather: {weather.weather[0].description}</p>
      </div>
    )}
    <br>
    </br>
    <br>
    </br>
  </div>
  );
};

export default App;
