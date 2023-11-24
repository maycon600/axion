import styled from "styled-components";

interface Props {
  circleColor: string;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  text-align: left;

  .verticalBar {
    height: 2.25rem;
    width: 1px;
    background-color: #8790ab;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 1rem;

    strong {
      font-size: 1.25rem;
      font-weight: normal;
      text-align: left;
    }
  }

  .name {
    display: flex;
    align-items: center;
    gap: 0.2rem;

    font-size: 0.75rem;
    color: #8790ab;
  }

  .circle {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ circleColor }) => circleColor};
  }
`;
