import Entry from "./Entry";
import TabBar from "./TabBar";
import Button from "../Form/Button";

export default function EntriesSection() {
  return (
    <>
      <TabBar />
      <Entry
        date="Feb 28, 2028"
        motto="That's life in the city"
        notes="Life in the city is exciting and it smells bad but there is always someone there"
      />
      <Entry
        date="Feb 28, 2028"
        motto="That's life in the city"
        notes="Life in the city is exciting and it smells bad but there is always someone there"
      />
      <Entry
        date="Feb 28, 2028"
        motto="That's life in the city"
        notes="Life in the city is exciting and it smells bad but there is always someone there"
      />
      <Entry
        date="Feb 28, 2028"
        motto="That's life in the city"
        notes="Life in the city is exciting and it smells bad but there is always someone there"
      />
    </>
  );
}
