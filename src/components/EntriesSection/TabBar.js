import { useState } from "react";
import Button from "../Form/Button";
import "./EntriesSection.css";

export default function TabBar() {
  const [favourites, setFavourites] = useState(0);
  function handleFavouriteClick() {
    setFavourites(favourites + 1);
  }

  return (
    <>
      <Button type="button" className="tabBar__button">
        <span>All Entries</span> <span>3</span>
      </Button>
      <Button
        type="button"
        className="tabBar__button"
        onClick={() => handleFavouriteClick()}
      >
        <span>Favourites</span> <span>{favourites}</span>
      </Button>
    </>
  );
}
