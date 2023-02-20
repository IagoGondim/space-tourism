import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburguer } from "../../assets/hamburguer.svg";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import {
  LogoWrapper,
  ContainerNav,
  NavHeader,
  Logo,
  Links,
  BoldSpan,
  HamburgerWrapper,
} from "./Style";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWidth(window.innerWidth);
      if (width > 480) {
        setToggleNav(true);
      } else {
        setToggleNav(false);
      }
    };
    updateWindowDimensions();

    window.addEventListener("resize", updateWindowDimensions);

    return () => window.removeEventListener("resize", updateWindowDimensions);
  }, [width]);

  return (
    <NavHeader>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <HamburgerWrapper
        toggle={toggleNav}
        onClick={() => setToggleNav(!toggleNav)}
      >
        <Hamburguer fill={"#ffffff"} />
      </HamburgerWrapper>
      <ContainerNav toggle={toggleNav}>
        <Links to="/" end>
          <BoldSpan>00</BoldSpan>home
        </Links>
        <Links to="destinations">
          <BoldSpan>01</BoldSpan>destinations
        </Links>
        <Links to="crew">
          <BoldSpan>02</BoldSpan>crew
        </Links>
        <Links to="technology">
          <BoldSpan>03</BoldSpan>technology
        </Links>
      </ContainerNav>
    </NavHeader>
  );
};

export default Header;
