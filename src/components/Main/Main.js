import EntriesSection from "../EntriesSection/EntriesSection";
import FavEntriesSection from "../EntriesSection/FavSection";
import Form from "../Form/Form";
import TabBar from "../EntriesSection/TabBar";
import { nanoid } from "nanoid";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

export default function Main({ favSection }) {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: defaultEntries,
  });
  const [favEntries, setFavEntries] = useLocalStorageState("favEntries", {
    defaultValue: [{}],
  });

  function handleAddEntries(newEntry) {
    setEntries([{ id: nanoid(), isFavorite: false, ...newEntry }, ...entries]);
  }

  function handleToggleFavorite(id) {
    setEntries(
      entries.map((entry) =>
        entry.id === id ? { ...entry, isFavorite: !entry.isFavorite } : entry
      )
    );
    setFavEntries(
      entries.map((entry) => entry.id === id && { entry, ...favEntries })
    );
  }

  function switchToFavSection(favSection) {
    favSection = true;
    console.log("fav entries: ", favEntries);
  }

  function switchToAllSection(favSection) {
    favSection = false;
    console.log("all entries: ", entries);
  }

  return (
    <StyledMain>
      <Form onAddEntries={handleAddEntries} />
      <TabBar
        onAllSectionClick={switchToAllSection}
        onFavSectionClick={switchToFavSection}
      />
      {favSection === true ? (
        <FavEntriesSection
          favEntries={favEntries}
          onToggleFavorite={handleToggleFavorite}
        />
      ) : (
        <EntriesSection
          entries={entries}
          onToggleFavorite={handleToggleFavorite}
        />
      )}
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
