import styled from "styled-components";

export const Test = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const PersonImg = styled.img`
  background-size: cover;
  padding: 5rem 0 0 5rem;
  margin-top: 2rem;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ContainerButton = styled.div`
  display: flex;
  column-gap: 1.5rem;
  height: 350px;
  position: fixed;
  align-items: flex-end;
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
