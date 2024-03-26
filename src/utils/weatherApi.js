import api from "./api";

export const getForecastWeather = () => {
  const latitude = "38.750660";
  const longitude = "-77.475143";
  const APIkey = "141a62ef81f041dac8eee44114914481";

  const weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then(api.handleServerResponse);
  return weatherApi;
};
