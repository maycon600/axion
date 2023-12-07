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
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  width: 35rem;
  height: 25rem;
  background-color: #fff;
  border-radius: 10px;
  border: 0.3px solid #c3c3c3;
`;

export const Tip = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  p {
    font-size: 0.75rem;
    margin: 0;
    padding: 0;
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
