import styled from "styled-components";

interface ButtonProps {
  padding?: string;
}

export const Container = styled.button<ButtonProps>`
  background-color: ${({ theme }) => theme.color.darkBlueAxion};
  color: white;
  border: 0;
  border-radius: 5px;
  padding: ${({ padding }) => (padding ? padding : "1.25rem 1rem")};
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.hoverDarkBlueAxion};
  }
`;
