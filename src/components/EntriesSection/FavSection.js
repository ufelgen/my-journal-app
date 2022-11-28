import Entry from "./Entry";
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
      {favEntries.map((favEntry, index) => {
        return (
          <Fragment key={favEntry.notes}>
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
