import styled from "styled-components";

interface Props {
  barColor: string;
}

export const TitleContainer = styled.div<Props>`
  position: relative;

  .bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 2px;
    border-radius: 2px;
    height: 3rem;
    background-color: ${({ barColor }) => barColor};
  }
`;
