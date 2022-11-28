import styled from "styled-components";

export default function TabBarButton({ type, children, onClick }) {
  return (
    <>
      <StyledTabBarButton type={type} onClick={onClick}>
        {children}
      </StyledTabBarButton>
    </>
  );
}

const StyledTabBarButton = styled.button`
  color: var(--color-nemo);
  background-color: var(--color-foam);
  padding: 0.5rem;
  margin: 1rem 3rem;
  width: 7rem;
  border: none;
`;
