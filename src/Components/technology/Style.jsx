import styled from "styled-components";

import launchLand from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import launchPortrait from "../../assets/technology/image-launch-vehicle-portrait.jpg";

export const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-areas: "col1" "col2" "col3";
  }
  @media (max-width: 480px) {
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    row-gap: 1rem;
  }
  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  align-self: center;
  justify-self: center;
  @media (max-width: 768px) {
    flex-direction: row;
    column-gap: 1rem;
  }
  @media (max-width: 480px) {
  }
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
  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
    font-size: 1rem;
  }

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

  @media (max-width: 768px) {
    justify-self: center;
    width: 40vh;
  }
  @media (max-width: 450px) {
    justify-self: center;
    width: 30vh;
  }
`;
