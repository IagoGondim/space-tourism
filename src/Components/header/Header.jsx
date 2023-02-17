import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Hamburguer } from "../../assets/hamburguer.svg";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import { LogoWrapper, ContainerNav, NavHeader, Logo, Links } from "./Style";

const Header = () => {
  return (
    <NavHeader>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <ContainerNav>
        <Links to="/" end isactive="active">
          <p>00</p>home
        </Links>
        <Links to="destinations" isactive="active">
          <p>01</p>destinations
        </Links>
        <Links to="crew" isactive="active">
          <p>02</p>crew
        </Links>
        <Links to="technology" isactive="active">
          <p>03</p>technology
        </Links>
      </ContainerNav>
    </NavHeader>
  );
};

export default Header;
