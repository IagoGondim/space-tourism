import styled from "styled-components";

export const CelestialBody = styled.img`
  margin: 5rem 0 0 5rem;
`;

export const ContainerNav = styled.div`
  display: flex;
  column-gap: 3rem;
  width: 100%;
  height: 30px;
`;

export const NavCelestialBody = styled.div`
  border: none;
  font-family: "Barlow Condensed";
  font-size: 1rem;
  letter-spacing: 2.36px;
  text-transform: uppercase;
  color: #d0d6f9;
  padding-bottom: 12px;
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 150ms ease-in-out;
  &:hover {
    border-bottom: 3px solid rgba(208, 214, 249, 0.4);
    padding-bottom: 2rem;
  }
  &.active {
    border-bottom: 3px solid rgba(208, 214, 249, 1);
    padding-bottom: 2rem;
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
`;
export const TravelWrapper = styled.div``;
