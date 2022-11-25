import { useState } from "react";
import TabBarButton from "./TabBarButton";

export default function TabBar() {
  const [favourites, setFavourites] = useState(0);
  function handleFavouriteClick() {
    setFavourites(favourites + 1);
  }

  return (
    <>
      <TabBarButton type="button">
        <span>All Entries</span> <span>3</span>
      </TabBarButton>
      <TabBarButton type="button" onClick={() => handleFavouriteClick()}>
        <span>Favourites</span> <span>{favourites}</span>
      </TabBarButton>
    </>
  );
}
