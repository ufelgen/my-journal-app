import TabBarButton from "./TabBarButton";

export default function TabBar() {
  function switchToFavSection() {}

  function switchToAllSection() {}
  return (
    <>
      <TabBarButton
        type="button"
        name="allEntries"
        onClick={() => switchToAllSection()}
      >
        <span>All Entries</span> <span>3</span>
      </TabBarButton>
      <TabBarButton
        type="button"
        name="favorites"
        onClick={() => switchToFavSection()}
      >
        <span>Favourites</span> <span>0</span>
      </TabBarButton>
    </>
  );
}
