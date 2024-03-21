import React, { useContext } from "react";
import { weatherOptions } from "../../utils/constants";
import "../WeatherCard/Weather.css";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const weatherOption = weatherOptions.find((item) => {
    return item.day === day && item.type === type;
  });

  const imgSrcUrl = weatherOption.url || "";
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp}°{currentTemperatureUnit}
      </div>
      <img src={imgSrcUrl} alt="current weather" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
