import { useState } from "react";
import "./EntriesSection.css";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarFilled } from "../../assets/star-filled.svg";
import FavButton from "./FavButton";

export default function Entry({
  date,
  motto,
  notes,
  onToggleFavorite,
  isfavorite,
  id,
}) {
  return (
    <>
      <section className="entry">
        <h4 className="date">{date}</h4>
        <h3 className="motto">{motto}</h3>
        <FavButton
          className="favourites__button"
          onToggleFavorite={onToggleFavorite}
          isfavorite={isfavorite}
          id={id}
        >
          {isfavorite ? <StarFilled /> : <Star />}
        </FavButton>
        <article className="notes">{notes}</article>
      </section>
    </>
  );
}
