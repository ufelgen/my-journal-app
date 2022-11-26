import TabBarButton from "./TabBarButton";

export default function TabBar({
  onAllSectionClick,
  onFavSectionClick,
  favSection,
  entries,
  favEntries,
}) {
  return (
    <>
      <TabBarButton
        type="button"
        name="allEntries"
        onClick={() => onAllSectionClick()}
      >
        <span>All Entries</span> <span>{entries.length}</span>
      </TabBarButton>
      <TabBarButton
        type="button"
        name="favorites"
        onClick={() => onFavSectionClick()}
      >
        <span>Favourites</span> <span>{favEntries.lenth}</span>
      </TabBarButton>
    </>
  );
}
