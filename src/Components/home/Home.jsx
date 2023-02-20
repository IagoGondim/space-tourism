import React from "react";
import {
  Container,
  ContainerBg,
  Heading1,
  Heading5,
  Paragraph,
} from "../../styles/GlobalStyle";

import { Background, Button, ContentContainer, TextWrapper } from "./Style";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <ContainerBg>
          <Background />
        </ContainerBg>
        <ContentContainer>
          <TextWrapper>
            <Heading5>SO, YOU WANT TO TAVEL TO</Heading5>
            <Heading1>SPACE</Heading1>
            <Paragraph>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </Paragraph>
          </TextWrapper>
          <Link to="/destinations">
            <Button>EXPLORE</Button>
          </Link>
        </ContentContainer>
      </Container>
    </>
  );
};

export default Home;
