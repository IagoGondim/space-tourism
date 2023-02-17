import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoBrand } from "../../assets/logo.svg";

export const NavHeader = styled.header`
  max-width: 1440px;
  position: fixed;
  margin-top: 2.5rem;
  width: 100%;
  min-width: 100%;
  height: 6rem;
  padding-left: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;
  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 25%;
    background-color: rgba(255, 255, 255, 0.25);
    mix-blend-mode: normal;
    left: 10rem;
    z-index: 2;
  }
`;

export const Logo = styled(LogoBrand)`
  cursor: pointer;
`;

export const LogoWrapper = styled.div``;
export const ContainerNav = styled.nav`
  list-style: none;
  display: flex;
  column-gap: 3rem;
  padding-left: 7.5rem;
  padding-right: 10rem;
  height: 100%;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(1rem);
`;

export const Links = styled(NavLink)`
  color: #ffffff;
  font-family: "Barlow Condensed";
  font-size: 1rem;
  letter-spacing: 5px;
  line-height: auto;
  text-transform: uppercase;
  position: relative;
  display: flex;
  column-gap: 0.7rem;
  text-decoration: none;
  height: 100%;
  align-items: center;
  p {
    font-weight: bold;
  }

  &.active {
    &:after {
      content: "";
      position: absolute;
      height: 3px;
      width: 100%;
      background-color: #ffffff;
      bottom: 0;
      left: 0;
      transition: 200ms;
    }
  }
`;
