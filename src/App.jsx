import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeather = async (city) => {
    const apiKey = '7f8859c7c8a8db98db666f28f7cc14ac';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === 200) {
        setWeatherData(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>Weather App</h1>
        <SearchBar onSearch={fetchWeather} /> {/* Pass `fetchWeather` as `onSearch` */}
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;
