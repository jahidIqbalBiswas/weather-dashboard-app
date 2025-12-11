import redHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";
export default function Favourite({ onShowModal, isFavModal }) {
  return (
    <div
      onClick={onShowModal}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <img src={isFavModal ? redHeartIcon : heartIcon} alt="Favourite-icon" />
      <span className="text-white text-sm sm:text-lg">Favourite Locations</span>
    </div>
  );
}
