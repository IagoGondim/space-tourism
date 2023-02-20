import styled from "styled-components";

export const Test = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PersonImg = styled.img`
  background-size: cover;
  height: 70vh;

  @media (max-width: 768px) {
    height: 45vh;
  }
  @media (max-width: 480px) {
    height: 45vh;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  column-gap: 1.5rem;
  position: relative;
  align-items: flex-end;

  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
`;

export const Button = styled.button`
  height: 1rem;
  width: 1rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.4);
  transition: all 200ms ease-in-out;

  &:hover {
    scale: 1.2;
  }

  &.active {
    background: rgba(255, 255, 255, 1);
    scale: 1.2;
  }
`;
