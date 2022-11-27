import styled from "styled-components";
import TabBarButton from "./TabBarButton";

export default function TabBar({
  onAllSectionClick,
  onFavSectionClick,
  entries,
  favoriteEntries,
}) {
  return (
    <>
      <TabBarButton
        type="button"
        name="allEntries"
        onClick={() => onAllSectionClick()}
      >
        <span>All Entries</span>{" "}
        <StyledTabBarSpan>{entries.length}</StyledTabBarSpan>
      </TabBarButton>
      <TabBarButton
        type="button"
        name="favorites"
        onClick={() => onFavSectionClick()}
      >
        <span>Favourites</span>{" "}
        <StyledTabBarSpan>{favoriteEntries.length}</StyledTabBarSpan>
      </TabBarButton>
    </>
  );
}

const StyledTabBarSpan = styled.span`
  display: inline-block;
  font-size: 12px;
  padding: 2px 9px;
  border-radius: 999px;
  background-color: var(--color-nemo);
  color: var(--color-foam);
  font-weight: 400;
`;
