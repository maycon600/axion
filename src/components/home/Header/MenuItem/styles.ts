import styled from "styled-components";

interface MenuItemProps {
  active: boolean;
  imgSrc: string;
}

export const MenuItem = styled.div<MenuItemProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  opacity: ${({ active }) => (active ? "1" : "0.4")};
  cursor: pointer;
  width: 15.9rem;
  height: 8rem;
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 12px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.2s;

  .title {
    display: flex;
    justify-content: center;
    padding: 0.5rem 0;
    border: 1px solid white;
    border-radius: 4px;
    font-weight: bold;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    width: 92%;

    strong {
      font-size: 1rem;
    }
  }

  &:hover {
    opacity: 0.9;
    scale: 1.01;
  }
`;
