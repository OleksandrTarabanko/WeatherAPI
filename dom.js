import { mainContentArea } from "./main.js";

function createContent(city, country, temperature, humidity, weatherState) {
  const currentPosition = document.createElement("h1");
  currentPosition.classList.add("font");
  currentPosition.textContent = `You're searching weather for ${city} in ${country}`;

  const currentTemperature = document.createElement("p");
  currentTemperature.classList.add("font");
  currentTemperature.textContent = `Current Temperature is ${temperature} °C`;

  const currentHumidity = document.createElement("p");
  currentHumidity.classList.add("font");
  currentHumidity.textContent = `Humidity is ${humidity} %`;

  const currentWeatherState = document.createElement("p");
  currentWeatherState.classList.add("font");
  currentWeatherState.textContent = `General Weather Description: "${weatherState}"`;

  mainContentArea.append(
    currentPosition,
    currentTemperature,
    currentHumidity,
    currentWeatherState
  );
}

export { createContent };
