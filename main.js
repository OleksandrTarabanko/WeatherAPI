const mainContentArea = document.querySelector(".main");
const searchButton = document.querySelector("[data-name=searchButton]");
const cityDataList = document.querySelector("#city-list");
/** @type HTMLInputElement */
const cityInput = document.querySelector("[data-name=city]");
/** @type HTMLInputElement */
const countrySelect = document.querySelector("[name=country]");

import { findWeather, weatherDescriptionByCode } from "./api.js";
import { createContent } from "./dom.js";
import { cities } from "./cities.js";
import { countries } from "./countries.js";

countrySelect.insertAdjacentHTML(
  "beforeend",
  countries
    .map((el) => `<option value="${el.name}">${el.name} ${el.flag}`)
    .join("")
);

searchButton.onclick = async () => {
  mainContentArea.innerHTML = " ";
  const currentTime = new Date();
  console.log(currentTime);
  const weatherData = await findWeather(cityInput.value, countrySelect.value);
  console.log(weatherData);

  const {
    time,
    temperature_2m: temperatureData,
    relative_humidity_2m: humidityData,
    weather_code: weatherCode,
  } = weatherData.weather;

  const indexToFind = time
    .map((el) => new Date(el))
    .findIndex((el) => el > currentTime);

  const temperature = temperatureData[indexToFind];
  const humidity = humidityData[indexToFind];
  const weatherState = weatherDescriptionByCode(weatherCode[indexToFind]);

  // You need to show up 4 or 5 previous forecasts(i think you need to do this by reducing "indextoFind" --- indexToFind - 1,2,3 etc)

  createContent(
    weatherData.location.name,
    countrySelect.value,
    temperature,
    humidity,
    weatherState
  );
};

cityInput.onkeyup = () => {
  const searchValue = cityInput.value.toLowerCase();
  const optionsMarkup = cities
    .filter((el) => el.toLowerCase().startsWith(searchValue))
    .map((el) => `<option>${el}</option>`)
    .join("\n");

  cityDataList.innerHTML = optionsMarkup;
};

export { mainContentArea };
