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
  border: none;
  background-color: transparent;
  grid-area: star;
  //margin-right: 10px;
  //position: absolute;
  //margin-top: -15px;
`;
