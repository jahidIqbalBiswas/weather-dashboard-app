import { useState } from "react";
import Favourite from "./Favourite";
import FavouriteModal from "./FavouriteModal";
import Logo from "./Logo";
import Search from "./Search";
export default function Header() {
  const [isFavModal, setIsFavModal] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container md:flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center justify-between mt-10 md:mt-0 gap-5 md:gap-4 relative">
          <Search />
          <Favourite
            isFavModal={isFavModal}
            onShowModal={() => setIsFavModal(!isFavModal)}
          />
          {isFavModal && <FavouriteModal />}
        </div>
      </nav>
    </header>
  );
}
