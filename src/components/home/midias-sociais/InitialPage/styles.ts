import styled from "styled-components";

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(32rem, 1fr));
  justify-items: center;
  align-items: center;
  gap: 3rem;
  margin-top: 1.2rem;
`;

export const ChartContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  width: 35rem;
  height: 30rem;
  background-color: #fff;
  border-radius: 10px;
  border: 0.3px solid #c3c3c3;

  .chartContent {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

export const ChartCenterInfo = styled.div`
  position: absolute;
  top: 49%;
  left: 36%;
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

export const FollowerDataLegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface EngagmentLegendProps {
  circleColor: string;
}

export const EngagmentLegendContainer = styled.div<EngagmentLegendProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  .circle {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${({ circleColor }) => circleColor};
  }
`;

export const KeyIndicatorsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 100%;
  padding-top: 3rem;
`;

export const KeyIndicatorContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 1rem 2rem;
`;

export const FollowerDataContainer = styled(ChartContainer)``;
