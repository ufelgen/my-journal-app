import EntriesSection from "../EntriesSection/EntriesSection";
//import FavEntriesSection from "../EntriesSection/FavSection";
import Form from "../Form/Form";
import TabBar from "../EntriesSection/TabBar";
import { nanoid } from "nanoid";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";
import { useState } from "react";

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: defaultEntries,
  });

  const [displayed, setDisplayed] = useState("all");

  function handleAddEntries(newEntry) {
    setEntries([{ id: nanoid(), isFavorite: false, ...newEntry }, ...entries]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
  }

  const favoriteEntries = entries.filter((entry) => entry.isFavorite === true);

  function switchToFavSection() {
    setDisplayed("fav");
    console.log("fav entries: ", favoriteEntries);
  }

  function switchToAllSection() {
    setDisplayed("all");
    console.log("all entries: ", entries);
  }

  return (
    <StyledMain>
      <Form onAddEntries={handleAddEntries} />
      <TabBar
        onAllSectionClick={switchToAllSection}
        onFavSectionClick={switchToFavSection}
        entries={entries}
        favoriteEntries={favoriteEntries}
      />
      <EntriesSection
        entries={displayed === "all" ? entries : favoriteEntries}
        onToggleFavorite={handleToggleFavorite}
      />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  margin-bottom: 10vh;
`;

const defaultEntries = [
  {
    id: 1000,
    isFavorite: false,
    date: "Feb 5, 2025",
    motto: "We are in a state of chaos",
    notes:
      "Today I learned about React State. It was fun! I can't wait to learn more.",
  },
  {
    id: 999,
    isFavorite: false,
    date: "Feb 4, 2025",
    motto: "Props, Props, Props",
    notes:
      "Today I learned about React Props. Mad props to everyone who understands this!",
  },
  {
    id: 998,
    isFavorite: false,
    date: "Feb 3, 2025",
    motto: "How to nest components online fast",
    notes:
      "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
  },
  {
    id: 997,
    isFavorite: false,
    date: "Feb 2, 2025",
    motto: "I'm a React Developer",
    notes: "My React-ion when I learned about React: 😍",
  },
];
