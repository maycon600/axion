import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const SelectContainer = styled.div<Props>`
  & * {
    font-family: "Lato", sans-serif;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  height: 2rem;
  border: 1px solid #0d123c;
  width: 100%;
  cursor: pointer;
  background: white;
  padding: 0.5rem;
  font-size: 1.2rem;
  position: relative;
  transition: 0.2s;
  border-radius: ${({ isOpen }) => (isOpen ? "5px 5px 0 0" : "5px")};
  width: 230px;
  background-color: #0d123c;
  color: white;

  .white {
    font-size: 0.75rem;
    color: white;
  }

  strong {
    color: white;
    font-size: 0.75rem;
    white-space: nowrap;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
  }
  svg {
    transition: 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }

  .options-container {
    position: absolute;
    z-index: 10;
    top: 2rem;
    outline: 1px solid #0d123c;
    border-radius: 0 0 5px 5px;
    left: 0;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background: #0d123c;
  }

  .option {
    padding: 0.4rem 0.5rem;
    transition: 0.2s;
    cursor: pointer;
    font-size: 0.75rem;

    &:hover {
      background-color: #d5d2d2;
      scale: 1.01;
    }
  }
`;
