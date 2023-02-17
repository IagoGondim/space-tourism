import styled from "styled-components";
import backgroundDesktop from "../../assets/home/background-home-desktop.jpg";

export const ContentContainer = styled.div`
  z-index: 3;
  width: 100%;
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: #ffffff;
  margin-top: 15rem;
  max-width: 1440px;
`;

export const TextWrapper = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  max-width: 28rem;
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  margin: 5rem 8rem;
  font-size: 2em;
  letter-spacing: 2px;
  border-radius: 50%;
  height: 274px;
  width: 274px;
  border: none;
  transition: all 300ms ease-in-out;
  background: #ffffff;
  &:hover {
    box-shadow: 0 0 0 80px rgba(255, 255, 255, 0.15);
    cursor: pointer;
  }
`;
