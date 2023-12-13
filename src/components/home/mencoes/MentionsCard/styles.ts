import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  padding: 0.75rem;
  width: 22.5rem;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  transition: 0.2s;

  &:hover {
    transform: scale(1.02);
  }
`;
