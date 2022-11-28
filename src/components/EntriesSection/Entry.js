import styled from "styled-components";
import { ReactComponent as Star } from "../../assets/star.svg";
import { ReactComponent as StarFilled } from "../../assets/star-filled.svg";
import FavButton from "./FavButton";

export default function Entry({
  date,
  motto,
  notes,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <>
      <StyledEntrySection>
        <StyledDate>{date}</StyledDate>
        <StyledEntryMottoContainer>
          <StyledMotto>{motto}</StyledMotto>
          <FavButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
            id={id}
          >
            {isFavorite ? <StarFilled /> : <Star />}
          </FavButton>
        </StyledEntryMottoContainer>
        <StyledNotes>{notes}</StyledNotes>
      </StyledEntrySection>
    </>
  );
}

const StyledEntryMottoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledEntrySection = styled.section`
  flex-direction: column;
  align-items: center;
`;

const StyledDate = styled.h4`
  padding: 1rem;
`;

const StyledMotto = styled.h3`
  padding: 1rem;
`;

const StyledNotes = styled.article`
  padding: 1rem;
`;
