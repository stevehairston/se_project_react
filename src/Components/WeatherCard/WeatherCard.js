import "./Weather.css";

const weatherOptions = [
  { url: require("../../images/day/sunny.svg").default, day: true, type: "sunny" },
  { url: require("../../images/day/cloudy.svg").default, day: true, type: "cloudy" },
  { url: require("../../images/night/cloud.svg").default, day: false, type: "cloud" },
  { url: require("../../images/night/moon.svg").default, day: false, type: "moon" },
];

const WeatherCard = ({ day, type, weatherTemp = ""}) => {
  console.log("Weather Card");
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  console.log(imageSrc);
  console.log(imageSrc[0].url);

  const imageSrcURL = imageSrc[0].url || "";

  return (
    <section className="weather" id="weather">
      <div className="weather_info">{weatherTemp}° F</div>
      <img src={imageSrcURL} alt="sunny" className="weather_image" />
    </section>
  );
};

export default WeatherCard;
