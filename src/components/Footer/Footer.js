import styled from "styled-components";

export default function Footer() {
  return <StyledFooter>Journal App - 2028</StyledFooter>;
}

const StyledFooter = styled.footer`
  background-color: var(--color-granite);
  color: var(--color-foam);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10vh;
`;
