import React, { useState } from "react";
import background from "../../assets/technology/background-technology-desktop.jpg";
import {
  Background,
  Container,
  ContainerBg,
  ContainerInfo,
  ContentContainer,
  Heading2,
  Heading4,
  HeadingWrapper,
  InfoWrapper,
  Number,
  Paragraph,
  SubHeading2,
  SubHeading3,
} from "../../styles/GlobalStyle";
import { Button, ContainerButton, Images } from "./Style";
import rocket from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import { Pagedata } from "../../data/PageData";

const Technology = () => {
  const [technologys] = useState(Pagedata.technology);
  const [value, setValue] = useState(0);

  const { name, images, description } = technologys[value];
  return (
    <Container>
      <ContainerBg>
        <Background src={background} />
      </ContainerBg>
      <ContentContainer>
        <HeadingWrapper>
          <Number>03</Number>
          <Heading4>SPACE LAUNCH 101</Heading4>
        </HeadingWrapper>
        <ContainerInfo>
          <ContainerButton>
            {technologys.map((item, index) => (
              <Button
                onClick={() => setValue(index)}
                isactive="active"
                className={`${index === value && "active"}`}
              >
                {item.id}
              </Button>
            ))}
          </ContainerButton>
          <InfoWrapper>
            <SubHeading3>THE TERMINOLOGY...</SubHeading3>
            <Heading2>{name}</Heading2>
            <Paragraph>{description}</Paragraph>
          </InfoWrapper>
          <Images src={images} />
        </ContainerInfo>
      </ContentContainer>
    </Container>
  );
};

export default Technology;
