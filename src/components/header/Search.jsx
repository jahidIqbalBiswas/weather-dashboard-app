import { useContext } from "react";
import { LocationContext } from "../../contexts";
import { getLocationByName } from "../../data/location-data";
import { useDebounce } from "../../hooks";
export default function Search() {
  const { setSelectedLocation } = useContext(LocationContext);
  const doSearch = useDebounce((searchQuery) => {
    const fetchedLocation = getLocationByName(searchQuery);
    setSelectedLocation(fetchedLocation);
  }, 500);
  function handleChange(e) {
    const searchInput = e.target.value;
    const capitalizeSearchInput =
      searchInput.charAt(0).toUpperCase() + searchInput.slice(1);
    doSearch(capitalizeSearchInput);
  }
  return (
    <form action="#" onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input
          onChange={handleChange}
          className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
          type="search"
          placeholder="Search district (BD)"
          required
        />
      </div>
    </form>
  );
}
