import styled from "styled-components";

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-self: center;
  justify-self: center;
`;
export const Button = styled.button`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: none;
  border: 2px solid rgba(255, 255, 255, 0.4);
  color: #ffffff;
  font-size: 2rem;
  font-family: "Bellefair", serif;
  cursor: pointer;
  transition: all 200ms ease-in-out;

  &:hover {
    scale: 1.1;
  }

  &.active {
    border: 2px solid rgba(255, 255, 255, 0.4);
    background: #ffffff;
    color: #0b0d17;
    scale: 1.1;
  }
`;
export const Images = styled.img`
  align-self: center;
  justify-self: flex-end;
`;
