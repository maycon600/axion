import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const SelectContainer = styled.div<Props>`
  & * {
    font-family: "Lato", sans-serif;
  }

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid #0d123c;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  background: white;
  padding: 0.5rem 0;
  font-family: "Lato", sans-serif;
  font-size: 0.875rem;
  position: relative;
  transition: 0.2s;
  border-radius: ${({ isOpen }) => (isOpen ? "10px 10px 0 0" : "10px")};
  color: ${({ theme }) => theme.color.secondary_100};
  width: 9.4rem;

  strong {
    white-space: nowrap;
    overflow: hidden;
    text-align: start;
    /* margin-right: 2.5rem; */
    text-overflow: ellipsis;
  }
  svg {
    transition: 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }

  .options-container {
    position: absolute;
    z-index: 10;
    top: 2.5rem;
    outline: 1px solid #0d123c;
    border-radius: 0 0 5px 5px;
    left: 0;
    width: 100%;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    background: white;
  }

  .option {
    padding: 0.2rem 2rem;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #d5d2d2;
      scale: 1.01;
    }
  }
`;
