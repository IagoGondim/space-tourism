import styled from "styled-components";

export const CelestialBody = styled.img`
  /* margin: 5rem 0 0 5rem; */
  @media (max-width: 768px) {
    margin: 0;
    height: 300px;
    width: 300px;
  }
  @media (max-width: 480px) {
  }
`;

export const ContainerNav = styled.div`
  display: flex;
  column-gap: 3rem;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
  }
  @media (max-width: 450px) {
  }
`;

export const NavCelestialBody = styled.div`
  border: none;
  font-family: "Barlow Condensed";
  font-size: 1rem;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  color: #d0d6f9;
  height: 40px;
  cursor: pointer;
  &:hover {
    border-bottom: 3px solid rgba(208, 214, 249, 0.4);
  }
  &.active {
    border-bottom: 3px solid rgba(208, 214, 249, 1);
  }
`;
export const Line = styled.div`
  content: "";
  height: 1px;
  width: 100%;
  border: none;
  background-color: #d0d6f9;
`;
export const TravelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  row-gap: 2rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TravelWrapper = styled.div`
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
