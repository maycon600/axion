import styled from "styled-components";

export const SuggestionContainer = styled.div`
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
`;
