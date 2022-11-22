import { useState } from "react";
import "./EntriesSection.css";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarFilled } from "../../assets/star-filled.svg";
import Button from "../Form/Button";

export default function Entry({ date, motto, notes }) {
  const [isFavourite, setIsFavourite] = useState(false);

  function handleFavourite() {
    setIsFavourite(!isFavourite);
  }

  return (
    <>
      <section className="entry">
        <h4 className="date">{date}</h4>
        <h3 className="motto">{motto}</h3>
        <Button
          className="favourites__button"
          onClick={() => handleFavourite()}
        >
          {isFavourite ? <StarFilled /> : <Star />}
        </Button>
        <article className="notes">{notes}</article>
      </section>
    </>
  );
}
