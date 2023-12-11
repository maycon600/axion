import styled from "styled-components";

export const ChartTipContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;

  transition: 0.2s ease-in;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`