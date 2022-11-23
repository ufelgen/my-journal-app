import EntriesSection from "../EntriesSection/EntriesSection";
import Form from "../Form/Form";
import { useState } from "react";
import { nanoid } from "nanoid";
import useLocalStorageState from "use-local-storage-state";
import Entry from "../EntriesSection/Entry";

export default function Main() {
  const [entries, setEntries] = useLocalStorageState("entries", {
    defaultValue: defaultEntries,
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
  }

  return (
    <main>
      <Form onAddEntries={handleAddEntries} />
      <EntriesSection
        entries={entries}
        onToggleFavorite={handleToggleFavorite}
      />
    </main>
  );
}

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
