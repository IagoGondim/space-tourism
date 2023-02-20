import React, { useState } from "react";
import background from "../../assets/crew/background-crew-desktop.jpg";
import {
  Background,
  Container,
  ContainerBg,
  ContainerInfo,
  ContentContainer,
  Heading4,
  HeadingWrapper,
  Number,
  InfoWrapper,
  Paragraph,
  Heading2,
  Heading4Opa,
} from "../../styles/GlobalStyle";
import { Button, ContainerButton, PersonImg, Test } from "./Style";
import { Pagedata } from "../../data/PageData";

const Crew = () => {
  const [peoples] = useState(Pagedata.crew);
  const [value, setValue] = useState(0);

  const { name, images, role, bio } = peoples[value];
  return (
    <Container>
      <ContainerBg>
        <Background src={background} />
      </ContainerBg>
      <ContentContainer>
        <HeadingWrapper>
          <Number>02</Number>
          <Heading4>Meet your crew</Heading4>
        </HeadingWrapper>
        <ContainerInfo>
          <InfoWrapper>
            <Heading4Opa>{role}</Heading4Opa>
            <Heading2>{name}</Heading2>
            <Paragraph>{bio}</Paragraph>
            <ContainerButton>
              {peoples.map((item, index) => (
                <Button
                  onClick={() => setValue(index)}
                  className={`${index === value && "active"}`}
                  isactive="active"
                ></Button>
              ))}
            </ContainerButton>
          </InfoWrapper>
          <PersonImg src={images} />
        </ContainerInfo>
      </ContentContainer>
    </Container>
  );
};

export default Crew;
