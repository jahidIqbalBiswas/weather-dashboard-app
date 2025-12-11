import Page from "./Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./providers";
export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
