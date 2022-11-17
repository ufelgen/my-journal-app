import "./EntriesSection.css";
import { ReactComponent as Star } from "../../assets/star.svg";

export default function Entry({ date, motto, notes, star }) {
  return (
    <>
      <section className="entry">
        <h4 className="date">{date}</h4>
        <h3 className="motto">{motto}</h3>
        <Star />
        <article className="notes">{notes}</article>
      </section>
    </>
  );
}
