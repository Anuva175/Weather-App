
/*
import React, { useState, useEffect } from 'react';
import './Home.css';

const KEY='1834d69f7393bc057c21519303d38b36';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const fetchWeatherData = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
        className="input"
      />
      {weatherData && (
        <div className="weather-container">
          <h2>Current Weather</h2>
          <div className="weather-data">
            <div>Temperature: {weatherData.main.temp}°C</div>
            <div>Weather: {weatherData.weather[0].description}</div>
            <div>Wind: {weatherData.wind.speed} m/s</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
*/




import React, { useState, useEffect } from 'react';
import './Home.css';

const KEY = '1834d69f7393bc057c21519303d38b36';

const Home = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (location) {
      fetchWeatherData();
    }
  }, [location]);

  const fetchWeatherData = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}`;

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('City not found');
      }
      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setError('City not found');
    }
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="container">
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
        className="input"
      />
      {error && <div className="error">{error}</div>}
      {weatherData && (
        <div className="weather-container">
          <h2>Current Weather</h2>
          <div className="weather-data">
            <div>City: {weatherData.name}</div>
            <div>Temperature: {weatherData.main.temp}°C</div>
            <div>Weather: {weatherData.weather[0].description}</div>
            <div>Wind: {weatherData.wind.speed} m/s</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

