import React, { useEffect, useState } from "react";
import background from "../../assets/destination/background-destination-desktop.jpg";
import moon from "../../assets/destination/image-moon.png";
import {
  Background,
  Container,
  ContainerBg,
  Heading1,
  Heading4,
  Number,
  Paragraph,
  SubHeading1,
  SubHeading2,
  ContainerInfo,
  ContentContainer,
  HeadingWrapper,
  InfoWrapper,
} from "../../styles/GlobalStyle";
import {
  CelestialBody,
  ContainerNav,
  Line,
  NavCelestialBody,
  TravelContainer,
  TravelWrapper,
} from "./Style";
import { Pagedata } from "../../data/PageData";

const Destinations = () => {
  const [planets] = useState(Pagedata.destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];
  return (
    <Container>
      <ContainerBg>
        <Background src={background} />
      </ContainerBg>
      <ContentContainer>
        <HeadingWrapper>
          <Number>01</Number>
          <Heading4>Pick you destinations</Heading4>
        </HeadingWrapper>
        <ContainerInfo>
          <CelestialBody src={images} />
          <InfoWrapper>
            <ContainerNav>
              {planets.map((item, index) => (
                <NavCelestialBody
                  onClick={() => setValue(index)}
                  isactive="active"
                  className={`${index === value && "active"}`}
                >
                  {item.name}
                </NavCelestialBody>
              ))}
            </ContainerNav>
            <Heading1>{name}</Heading1>
            <Paragraph>{description}</Paragraph>
            <Line />
            <TravelContainer>
              <TravelWrapper>
                <SubHeading2>Avg. Distance</SubHeading2>
                <SubHeading1>{distance}</SubHeading1>
              </TravelWrapper>
              <TravelWrapper>
                <SubHeading2>Est. Travel Time</SubHeading2>
                <SubHeading1>{travel}</SubHeading1>
              </TravelWrapper>
            </TravelContainer>
          </InfoWrapper>
        </ContainerInfo>
      </ContentContainer>
    </Container>
  );
};

export default Destinations;
