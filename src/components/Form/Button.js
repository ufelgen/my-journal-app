import styled from "styled-components";

export default function Button({ type, className, children, onClick }) {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
}

const StyledTabBarButton = styled.button``;
