import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: 'Bellefair', sans-serif;
  }
`;

export const Number = styled.p`
  color: #4e5059;
  margin-bottom: 5px;
  letter-spacing: 4.72;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.875rem;
  font-family: "Barlow Condensed", sans-serif;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Heading1 = styled.h1`
  text-transform: uppercase;
  font-weight: normal;
  font-size: 8rem;
  font-family: "Bellefair", serif;
  @media (max-width: 768px) {
    font-size: 5rem;
    letter-spacing: 3.75;
  }
  @media (max-width: 480px) {
    font-size: 5rem;
    letter-spacing: 3.75;
  }
`;

export const Heading2 = styled.h2`
  font-size: 3.5rem;
  font-family: "Bellefair", serif;
  font-weight: 400;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const Heading3 = styled.h3`
  font-size: 3.5rem;
  font-family: "Bellefair", serif;
`;

export const Heading4 = styled.h4`
  letter-spacing: 4.72;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.875rem;
  font-family: "Bellefair", serif;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const Heading4Opa = styled.h4`
  letter-spacing: 4.72;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.875rem;
  font-family: "Bellefair", serif;
  opacity: 0.5;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const Heading5 = styled.h5`
  font-size: 1.75rem;
  letter-spacing: 4.75;
  font-family: "Barlow Condensed", sans-serif;
  color: #d0d6f9;
  @media (max-width: 480px) {
    font-size: 1rem;
    letter-spacing: 3.75;
  }
`;

export const SubHeading1 = styled.p`
  font-size: 1.75rem;
  color: #ffffff;
  text-transform: uppercase;
  font-family: "Bellefair", serif;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    letter-spacing: 3.75;
  }
  @media (max-width: 450px) {
    font-size: 1rem;
    letter-spacing: 3.75;
  }
`;

export const SubHeading2 = styled.p`
  font-size: 0.875rem;
  letter-spacing: 2.35;
  color: #d0d6f9;
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
  @media (max-width: 768px) {
  }
  @media (max-width: 450px) {
  }
`;

export const SubHeading3 = styled.p`
  font-size: 1.5em;
  letter-spacing: 2.7;
  color: #d0d6f9;
  text-transform: uppercase;
  font-family: "Barlow Condensed", sans-serif;
`;

export const Paragraph = styled.p`
  font-size: 1.25rem;
  font-family: "Barlow Condensed", sans-serif;
  color: #d0d6f9;
  @media (max-width: 768px) {
    font-size: 1rem;
    letter-spacing: 3.75;
  }
  @media (max-width: 480px) {
    font-size: 0.75rem;
    letter-spacing: 3.75;
  }
`;

export const NavText = styled.p`
  font-size: 1rem;
  letter-spacing: 2.7;
  font-family: "Barlow Condensed", sans-serif;
`;

export const Container = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  position: relative;
`;

export const ContainerBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Background = styled.img`
  width: 100%;
  height: 100vh;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 6rem;
  width: 100%;
  position: relative;
  color: #ffffff;
`;

export const HeadingWrapper = styled.div`
  padding-left: 10rem;
  column-gap: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  color: #ffffff;
  @media (max-width: 768px) {
    padding-left: 2rem;
  }
  @media (max-width: 480px) {
  }
`;

export const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding-left: 5rem;
  max-width: 1200px;
  margin: 2rem auto auto auto;
  margin: auto;
  height: 500px;
  column-gap: 3rem;
  row-gap: 1rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-left: 0rem;
    align-items: center;
  }
  @media (max-width: 480px) {
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  row-gap: 1rem;
  @media (max-width: 768px) {
    align-items: center;
  }
  @media (max-width: 480px) {
  }
`;

export const colors = {
  primary: "#0B0D17",
  secondary: "#D0D6f9",
  tertiary: "#FFFFFF",
};
