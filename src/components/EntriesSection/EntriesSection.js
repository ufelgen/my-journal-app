import Badge from "./Badge";
import EntryList from "./EntryList";
import Entry from "./Entry";
import TabBar from "./TabBar";
import Button from "../Form/Button";

export function Title() {}

export function Date() {}

export function Text() {}

export function FavIcon() {}

export default function EntriesSection() {
  return (
    <>
      <Button type="button">All Entries 3</Button>
      <Button type="button">Favourites 1</Button>
      <section>
        <h4>Feb 27, 2028</h4>
        <h3>"That's life in the city"</h3>
        <img></img>
        <p>Life in the city is fast and I love it.</p>
      </section>
    </>
  );
}
