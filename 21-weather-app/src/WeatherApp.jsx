import { useEffect, useState } from "react";
import Search from "./components/Search";
import { kelvinToCelsius } from "./utils/KelvinToCelsius";

export default function WeatherApp() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`
      );

      const data = await response.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  async function handleSearch() {
    if (!search) return;
    fetchWeatherData(search);
    console.log(weatherData);
  }

  const existCity = weatherData?.name;

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  useEffect(() => {
    fetchWeatherData("lima");
  }, []);

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="weather-container">
          <div className="city-name">
            <h1>
              {!existCity ? "City Not Found" : weatherData?.name + ", "}
              <span>{weatherData?.sys?.country}</span>
            </h1>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="temp">
            {!existCity ? "-" : kelvinToCelsius(weatherData?.main?.temp) + "°C"}
          </div>
          <p className="description">
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>

          <table className="weather-info">
            <thead>
              <tr className="column">
                <th>Wind Speed</th>
                <th>Humidity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="column">
                <td className="wind">
                  {!existCity ? "-" : weatherData?.wind?.speed + " m/s"}
                </td>
                <td className="humidity">
                  {!existCity ? "-" : weatherData?.main?.humidity + " %"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
