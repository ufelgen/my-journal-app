import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1 className="header">JOURNAL</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: rgb(233, 232, 232);
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
  font-size: 1rem;
`;
