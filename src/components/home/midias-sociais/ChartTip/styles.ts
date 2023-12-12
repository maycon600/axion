import styled, { keyframes } from "styled-components";

export const ChartTipContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  transition: 0.2s ease-in;
  cursor: pointer;

  img {
    &:hover {
      opacity: 0.8;
    }
  }
`;

interface MessageProps {
  show: boolean;
}

export const Message = styled.div<MessageProps>`
  position: absolute;
  width: 18rem;
  padding: 1rem;
  right: -2rem;
  bottom: 3.8rem;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  z-index: ${({ show }) => (show ? 100 : -1)};
  opacity: ${({ show }) => (show ? 1 : 0)};

  .arrow {
    position: absolute;
    background-color: white;
    width: 2rem;
    height: 2rem;
    right: 2.1rem;
    transform: rotate(45deg);
    border-right: 1px solid black;
    border-bottom: 1px solid black;
  }
`;
