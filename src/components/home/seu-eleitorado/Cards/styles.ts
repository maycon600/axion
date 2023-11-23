import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
`;

interface VerticalBarProps {
  barColor: string;
}

export const VerticalBar = styled.div<VerticalBarProps>`
  width: 0.25rem;
  height: 3.5rem;
  border-radius: 20px;
  background-color: ${(props) => props.barColor};
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 17.25rem;
  height: 5.625rem;
  padding: 1rem 1rem 1rem 1.3rem;
  background-color: white;
  border-radius: 10px;
  border: 0.3px solid #c3c3c3;
  color: #292d32;

  p {
    line-height: 1;
    font-size: 1.125rem;
    margin: 0;
  }
`;

export const CardBottomInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LocationCard = styled(CardContainer)``;
