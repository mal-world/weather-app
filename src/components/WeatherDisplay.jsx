import React from 'react'

const WeatherDisplay = ( { weatherData}) => {
    if(!weatherData) {
        return <p>No weather data available. Search city!</p>
    }

    const { name, main, weather, wind } = weatherData;
  return (
    <div>
        <h2>{name}</h2>
        <p>Temperature: {main.temp}C</p>
        <p>Condition: {weather[0].description}</p>
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {wind.speed}m/s</p>
    </div>
  );
};

export default WeatherDisplay;