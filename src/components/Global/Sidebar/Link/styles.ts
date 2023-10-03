import { styled } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "react-bootstrap";
import Theme from "@/styles/themes";

interface LinkProps {
  isActive: boolean;
}

export const LinkContainer = styled(Link)<LinkProps>`
  position: relative;
  
`;

export const NavIcons = styled(Image)`
  width: 1.5rem;
  height: auto;
`;

export const NavBrand = styled(Navbar.Brand)<LinkProps>`
  position: relative;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  align-items: center;
  width: 100%;
  transition: ease-in-out 0.2s all;
  background-color: ${({ isActive }) => (isActive ? "#232323" : "transparent")};

  span {
    transition: 0.3s;
    color: ${({ isActive }) => (isActive ? "white" : Theme.color.gray_80)};
  }

  &:hover {
    background-color: #434343;

    path {
      fill: red;
    }

    span {
      color: white;
    }
  }
`;
