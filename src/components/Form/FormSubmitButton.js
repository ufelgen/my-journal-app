import styled from "styled-components";

export default function Button({ type, children, onClick }) {
  return (
    <>
      <StyledFormSubmitButton type={type} onClick={onClick}>
        {children}
      </StyledFormSubmitButton>
    </>
  );
}

const StyledFormSubmitButton = styled.button`
  background-color: var(--color-nemo);
  color: var(--color-foam);
  padding: 0.5rem;
  margin: 1rem;
  width: 7rem;
  border: none;
`;
