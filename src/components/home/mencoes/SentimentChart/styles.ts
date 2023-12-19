import styled from "styled-components";

export const SentimentContainer = styled.div`
  padding: 1rem 1.5rem;
  background-color: white;
  border-radius: 10px;

  .legends {
    display: flex;
    gap: 3.25rem;
    margin-top: 1.5rem;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;

    .legends {
      /* flex-direction: column; */
      gap: 1rem;
    }
  }

  @media (max-width: 380px) {
    .legends {
      flex-direction: column;
    }
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  height: 1.5rem;
  width: 100%;
  margin-top: 1.5rem;
  padding-left: 1rem;
`;

interface PositiveProps {
  percent: string;
}

export const Positive = styled.div<PositiveProps>`
  background-color: #22c24f;
  width: ${({ percent }) => percent};
  border-radius: 3px 0 0 3px;
  transition: 0.5s;
`;

interface NegativeProps {
  percent: string;
}

export const Negative = styled(Positive)<NegativeProps>`
  background-color: #ea2020;
  height: 100%;
  width: ${({ percent }) => percent};
  border-radius: 0;
`;

interface NeutralProps {
  percent: string;
}

export const Neutral = styled(Negative)<NeutralProps>`
  background-color: #ffb043;
  border-radius: 0 3px 3px 0;
  width: ${({ percent }) => percent};
`;

export const LegendContainer = styled.div``;
