import styled from "styled-components";

export const SuggestionContainer = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.3rem 2.2rem 1.3rem 1rem;
  border-radius: 8.704px;
  border: 2px solid #424460;
  width: 17.4rem;
  cursor: pointer;
  transition: 0.2s;
  background-color: white;
  &:hover {
    background-color: #ededed;
  }

  #hover {
    opacity: 0.6;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    width: 14rem;
    padding: 1rem 2rem 1rem 0.5rem;

    img {
      width: 1.3rem;
      height: auto;
    }

    strong {
      font-size: 0.8rem;
    }
  }
`;

export const TipContainer = styled.div`
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

  @media (max-width: 768px) {
    top: 0.5rem;
    right: 0.5rem;
  }
`;

interface MessageProps {
  show: boolean;
}

export const Message = styled.div<MessageProps>`
  position: absolute;
  width: 18rem;
  padding: 1rem;
  right: -2.3rem;
  bottom: 3rem;
  border: 1px solid black;
  border-radius: 10px;
  text-align: justify;
  color: #1f1f1f;
  background-color: white;
  z-index: ${({ show }) => (show ? 100 : -1)};
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: 0.3s ease-in;

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
