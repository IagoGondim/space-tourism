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
  @media (max-width: 481px) {
  }
  @media (max-width: 769px) {
    max-width: 768px;
    width: 100%;
    margin-top: 0rem;
    padding-left: 0rem;
    justify-content: space-between;

    &:before {
      display: none;
    }
  }
`;

export const Logo = styled(LogoBrand)`
  margin-left: 1rem;
`;

export const LogoWrapper = styled.div``;

export const HamburgerWrapper = styled.div`
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  z-index: 5;
  cursor: pointer;
  transition: transform 0.5s;
  transform: rotate(${({ toggle }) => (toggle ? "-90deg" : "0deg")});
  @media (min-width: 481px) {
    display: none;
  }
`;

export const ContainerNav = styled.nav`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: transparent;
  top: 0;
  right: 0;
  width: 60vw;
  height: 60vh;
  padding-top: 6rem;
  transition: transform 300ms;
  transform: scaleY(${({ toggle }) => (toggle ? "1" : "0")});
  backdrop-filter: blur(50px);
  & a:first-child {
    border-top: 2px solid black;
  }
  @media (min-width: 481px) {
    position: static;
    flex-direction: row;
    width: 65%;
    height: 6rem;
    padding-top: 0px;

    border-top: none;
    transition: none;
    background-color: rgba(255, 255, 255, 0.04);
    & a:first-child {
      border-top: none;
    }
  }
  @media (min-width: 769px) {
    backdrop-filter: blur(5px);
    max-width: 1000px;
    width: 65%;
  }
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

export const BoldSpan = styled.p`
  font-weight: bold;

  @media (max-width: 481px) {
  }
  @media (max-width: 769px) {
    display: none;
  }
`;
