import Entry from "./Entry";
import TabBar from "./TabBar";
import Divider from "./Divider";
import { Fragment } from "react";

export default function EntriesSection({
  entries,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <>
      <TabBar />
      {entries.map((entry, index) => {
        return (
          <Fragment key={entry.id}>
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              isFavorite={entry.isFavorite}
              id={entry.id}
            />
            {index === entries.length - 1 ? "" : <Divider />}
          </Fragment>
        );
      })}
    </>
  );
}
