import "./Weather.css";
import sunny from "../../images/day/sunny.svg"
import cloudy from "../../images/day/cloudy.svg"
import cloud from "../../images/night/cloud.svg"
import moon from "../../images/night/moon.svg"

const weatherOptions = [
  {
    url: sunny,
    day: true,
    type: "sunny",
  },
  {
    url: cloudy,
    day: true,
    type: "cloudy",
  },
  {
    url: cloud,
    day: false,
    type: "cloud",
  },
  {
    url: moon,
    day: false,
    type: "moon",
  },
];

const WeatherCard = ({ day, type, weatherTemp = "" }) => {

  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });

  const imageSrcURL = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}° F</div>
      <img src={imageSrcURL} alt="sunny" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
