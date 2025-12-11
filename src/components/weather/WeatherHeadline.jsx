import { useContext } from "react";
import hazeIcon from "../.././assets/haze.svg";
import pinIcon from "../.././assets/pin.svg";
import cloudIcon from "../.././assets/cloud.svg";
import rainIcon from "../.././assets/rainy.svg";
import sunIcon from "../.././assets/sun.svg";
import thunderIcon from "../.././assets/thunder.svg";
import { WeatherContext } from "../../contexts";
import { getFormattedDateTime } from "../../utils";
export default function WeatherHeadline() {
  const { weather } = useContext(WeatherContext);
  const { temperature, time, location, climate } = weather;
  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return rainIcon;
      case "Haze":
        return hazeIcon;
      case "Sunny":
        return sunIcon;
      case "Thunder":
        return thunderIcon;
      case "Clouds":
        return cloudIcon;
      default:
        return sunIcon;
    }
  }
  return (
    <div>
      <div className="max-md:flex flex-wrap items-center justify-between md:-mt-10">
        <img className="w-10" src={getWeatherIcon(climate)} alt={climate} />
        <div className="max-md:flex items-end sm:items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°c
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img className="w-4 sm:w-10" src={pinIcon} />
            <h2 className="text-2xl sm:text-3xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getFormattedDateTime(time, "time", false)} -{" "}
        {getFormattedDateTime(time, "date", false)}
      </p>
    </div>
  );
}
