import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export const ChartContainer = styled.div`
  position: relative;
  height: 80px;
  width: 100px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`;

interface ChartBarProps {
  height: string;
  color: string;
}

export const ChartBar = styled.div<ChartBarProps>`
  height: ${(props) => props.height};
  background-color: ${(props) => props.color};
  width: 11px;
`;

interface LegendProps {
  color: string;
}

export const Legend = styled.div<LegendProps>`
  display: flex;
  align-items: center;
  gap: 1rem;

  .circle {
    width: 0.75rem;
    height: 0.75rem;
    border-radius: 50%;
    background-color: ${(props) => props.color};
  }
`;
