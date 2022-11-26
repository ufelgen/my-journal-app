import styled from "styled-components";

export default function FavButton({ type, children, onToggleFavorite, id }) {
  return (
    <>
      <StyledFavButton type={type} onClick={() => onToggleFavorite(id)}>
        {children}
      </StyledFavButton>
    </>
  );
}

const StyledFavButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  padding: 0;
  border-radius: 999px;
  aspect-ratio: 1;
  transition: background-color 0.2s ease-in-out;
  background-color: transparent;
  margin: -6px;
  padding: 6px;
  &:hover {
    background-color: var(--color-water);
  }
  &:active {
    background-color: var(--color-water-10);
  }
`;
