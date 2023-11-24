import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 23rem;
  width: 23rem;
`;

export const ChartCenterInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: center;

  .percentage {
    line-height: 1;
    font-size: 2rem;
  }

  .gain {
    font-size: 0.7rem;
    color: #22c24f;
  }

  .description {
    font-size: 0.7rem;
    color: #8790ab;
  }
`;
