import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "react-bootstrap";

interface LinkProps {
  isActive: boolean;
}

export const LinkContainer = styled(Link)<LinkProps>`
  position: relative;
`

export const NavIcons = styled(Image)`
  width: 70px;
  height: auto;
`;

export const NavBrand = styled(Navbar.Brand)<LinkProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  transition: ease-in-out 0.2s all;
  background-color: ${({isActive, theme}) => (isActive ? theme.color.gray_40 : "transparent")};
  span {
    font-weight: 600;
    padding-right: 10px;
    font-size: 15px;
    margin-left: calc(-10px);
  }

  .rectangle {
    display: ${({ isActive }) => (isActive ? "block" : "none")};

    position: absolute;
    left: 0;
    height: 100%;
    width: 5px;
    background-color: ${({theme}) => theme.color.primary_60};
  }

  &:hover {
    background-color: ${(props) => props.theme.color.primary_60};
  }
`;