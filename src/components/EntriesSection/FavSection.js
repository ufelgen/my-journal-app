import Entry from "./Entry";
import TabBar from "./TabBar";
import Divider from "./Divider";
import { Fragment } from "react";

export default function FavEntriesSection({
  favEntries,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <>
      <TabBar />
      {favEntries.map((favEntry, index) => {
        return (
          <Fragment key={favEntry.id}>
            <Entry
              date={favEntry.date}
              motto={favEntry.motto}
              notes={favEntry.notes}
              onToggleFavorite={onToggleFavorite}
              isFavorite={favEntry.isFavorite}
              id={favEntry.id}
            />
            {index === favEntries.length - 1 ? "" : <Divider />}
          </Fragment>
        );
      })}
    </>
  );
}
