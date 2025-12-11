import { useContext } from "react";
import hazeBg from "./assets/backgrounds/mist.jpeg";
import rainyBg from "./assets/backgrounds/rainy-day.jpg";
import cloudyBg from "./assets/backgrounds/scattered-clouds.jpg";
import sunnyBg from "./assets/backgrounds/sunny.jpg";
import thunderBg from "./assets/backgrounds/thunderstorm.jpg";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import { WeatherContext } from "./contexts";
export default function Page() {
  const { weather } = useContext(WeatherContext);
  const { climate } = weather;
  const getBgImg = (climate) => {
    switch (climate) {
      case "Rain":
        return rainyBg;
      case "Haze":
        return hazeBg;
      case "Sunny":
        return sunnyBg;
      case "Thunder":
        return thunderBg;
      case "Clouds":
        return cloudyBg;
      default:
        return sunnyBg;
    }
  };
  return (
    <>
      <div
        className="bg-cover! bg-no-repeat! bg-center!"
        style={{ background: `url("${getBgImg(climate)}")` }}
      >
        <Header />
        <main>
          <section className="grid items-center h-screen">
            <WeatherBoard />
          </section>
        </main>
      </div>
    </>
  );
}
