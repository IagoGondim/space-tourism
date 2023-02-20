import styled from "styled-components";
import backgroundDesktop from "../../assets/home/background-home-desktop.jpg";
import backgroundTablet from "../../assets/home/background-home-tablet.jpg";
import backgroundMobile from "../../assets/home/background-home-mobile.jpg";

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  z-index: 3;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin-top: 15rem;
  max-width: 1440px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 10rem;
  }
  @media (max-width: 480px) {
  }
`;

export const Background = styled.div`
  height: 100vh;
  background: url(${backgroundMobile}) no-repeat center;
  background-size: cover;
  overflow-y: scroll;

  @media (min-width: 481px) {
    background-image: url(${backgroundTablet});
  }
  @media (min-width: 769px) {
    background-image: url(${backgroundDesktop});
  }
`;

export const TextWrapper = styled.div`
  margin-left: 5rem;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  max-width: 28rem;

  @media (max-width: 768px) {
    align-items: center;
    margin-left: 0rem;
    padding-bottom: 4rem;
  }
  @media (max-width: 480px) {
  }
`;

export const Button = styled.button`
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
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 480px) {
    font-size: 1em;
    letter-spacing: 2px;
    border-radius: 50%;
    height: 150px;
    width: 150px;
  }
`;
