import Entry from "./Entry";
// import TabBar from "./TabBar";
import Button from "../Form/Button";

export default function EntriesSection() {
  return (
    <>
      <Button type="button">All Entries 3</Button>
      <Button type="button">Favourites 1</Button>
      <Entry
        date="Feb 28, 2028"
        motto="That's life in the city"
        notes="Life in the city is exciting and it smells bad but there is always someone there"
      />
    </>
  );
}
