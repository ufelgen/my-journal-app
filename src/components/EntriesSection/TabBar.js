import TabBarButton from "./TabBarButton";

export default function TabBar({
  onAllSectionClick,
  onFavSectionClick,
  favSection,
}) {
  return (
    <>
      <TabBarButton
        type="button"
        name="allEntries"
        onClick={() => onAllSectionClick(favSection)}
      >
        <span>All Entries</span> <span>3</span>
      </TabBarButton>
      <TabBarButton
        type="button"
        name="favorites"
        onClick={() => onFavSectionClick(favSection)}
      >
        <span>Favourites</span> <span>0</span>
      </TabBarButton>
    </>
  );
}
