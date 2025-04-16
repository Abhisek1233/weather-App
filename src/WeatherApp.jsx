import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 9.72,
    humidity: 100,
    tempMax: 10.05,
    temp: 10.05,
    tempMin: 10.05,
    weather: "Fog",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Wether App By Abhisek</h2>
      <SearchBox updateInfo = {updateInfo} />
      <InfoBox info = {weatherInfo} />
    </div>
  );
}
