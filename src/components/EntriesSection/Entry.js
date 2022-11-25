import { useState } from "react";
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
        <StyledMotto>{motto}</StyledMotto>
        <FavButton
          onToggleFavorite={onToggleFavorite}
          isFavorite={isFavorite}
          id={id}
        >
          {isFavorite ? <StarFilled /> : <Star />}
        </FavButton>
        <StyledNotes>{notes}</StyledNotes>
      </StyledEntrySection>
    </>
  );
}

const StyledEntrySection = styled.section`
  display: grid;
  grid-template-areas:
    "date date"
    "motto star"
    "notes notes";
  flex-direction: column;

  align-items: center;
`;

const StyledDate = styled.h4`
  padding: 1rem;
  grid-area: date;
`;

const StyledMotto = styled.h3`
  padding: 1rem;
  grid-area: motto;
`;

const StyledNotes = styled.article`
  padding: 1rem;
  grid-area: notes;
`;
