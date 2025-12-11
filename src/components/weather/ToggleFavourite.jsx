import { useContext, useEffect, useEffectEvent, useState } from "react";
import redHeartIcon from "../.././assets/heart-red.svg";
import heartIcon from "../.././assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../contexts";
export default function ToggleFavourite() {
  const [isFavourite, setIsFavourite] = useState(false);
  const { favourites, addToFavourites, removeFromFavourites } =
    useContext(FavouriteContext);
  const { weather } = useContext(WeatherContext);
  const { latitude, longitude, location } = weather;

  const syncFavouriteStatusOnLoad = useEffectEvent(() => {
    const found = favourites.find((fav) => fav.location === location);
    setIsFavourite(found);
  });

  useEffect(() => {
    syncFavouriteStatusOnLoad();
  }, []);

  const handleToggleFavourite = () => {
    const found = favourites.find((fav) => fav.location === location);
    if (!found) {
      addToFavourites(latitude, longitude, location);
    } else {
      removeFromFavourites(location);
    }
    setIsFavourite(!isFavourite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleToggleFavourite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>{isFavourite ? "Remove from" : "Add to"} Favourite</span>
          <img src={isFavourite ? redHeartIcon : heartIcon} alt="heart-icon" />
        </button>
      </div>
    </div>
  );
}
