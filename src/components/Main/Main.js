import "./Main.css";
import ItemCard from "../ItemCard/ItemCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, clothingItems }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;
  const weatherType = useMemo(() => {
    if (
      (currentTemperatureUnit === "F" && temp >= 86) ||
      (currentTemperatureUnit === "C" && temp >= 30)
    ) {
      return "hot";
    } else if (
      (currentTemperatureUnit === "F" && temp >= 66 && temp <= 85) ||
      (currentTemperatureUnit === "C" && temp >= 18.8889 && temp <= 29.4444)
    ) {
      return "warm";
    } else if (
      (currentTemperatureUnit === "F" && temp <= 65) ||
      (currentTemperatureUnit === "C" && temp <= 18.3333)
    ) {
      return "cold";
    }
  }, [currentTemperatureUnit, temp]);
  const filteredCards = clothingItems.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  const currentTime = new Date().getHours();

  const getIsDaytime = (time) => {
    if (time > 6 && time < 19) {
      return true;
    } else {
      return false;
    }
  };

  const isDay = getIsDaytime(currentTime);

  return (
    <main className="main">
      <WeatherCard
        className="weather_info"
        day={isDay}
        type="clear"
        weatherTemp={temp}
      />
      <section className="card_section" id="card-section">
        Today is {temp}° {currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item) => (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
