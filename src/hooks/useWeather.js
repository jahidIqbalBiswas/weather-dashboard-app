import { useContext, useEffect, useEffectEvent, useState } from "react";
import { LocationContext } from "../contexts";
const useWeather = () => {
  const [weather, setWeather] = useState({
    climate: "",
    temperature: "",
    location: "",
    time: "",
    minTemperature: "",
    maxTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    latitude: "",
    longitude: "",
  });
  const [loading, setLoading] = useState({ status: false, message: "" });
  const [error, setError] = useState(null);
  const { selectedLocation } = useContext(LocationContext);

  const fetchWeatherData = useEffectEvent(async (latitude, longitude) => {
    try {
      setLoading((prev) => ({
        ...prev,
        status: true,
        message: "Fetching weather data...",
      }));
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed: ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updatedWeatherData = {
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        location: data?.name,
        time: data?.dt,
        minTemperature: data?.main?.temp_min,
        maxTemperature: data?.main?.temp_max,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        latitude,
        longitude,
      };
      setWeather((prev) => ({ ...prev, ...updatedWeatherData }));
    } catch (err) {
      setError(err);
    } finally {
      setLoading((prev) => ({
        ...prev,
        status: false,
        message: "",
      }));
    }
  });
  useEffect(() => {
    setLoading((prev) => ({
      ...prev,
      status: true,
      message: "Finding location...",
    }));
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        fetchWeatherData(position.coords.latitude, position.coords.longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);
  return { weather, error, loading };
};
export default useWeather;
