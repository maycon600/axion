import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.gray_10};
  margin: 0.37rem 0 1rem 0.4rem;
  border-radius: 25px 0 0 25px;
  padding: 1.2rem;
  position: relative;
  width: calc(100% - 17rem);
  left: calc(100% - 17rem);

  @media (max-width: 1024px) {
    width: 100%;
    left: 100%;
  }
`;

export const Header = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const Main = styled.main`
  margin: 2%;
  border-radius: 10px;
  max-width: 1160px;
  margin: auto;
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  width: 100%;
  align-items: center;
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 1230px) {
    grid-template-columns: 1fr;
  }
`;

export const AgeGroupLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (max-width: 768px) {
    margin: auto;
  }
`;

export const VotersInfoTitle = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  background-color: #fff;
  border-radius: 10px;
  border: 0.3px solid #c3c3c3;
`;

export const AgeGroupContainer = styled(ChartContainer)`
  width: 30rem;
  height: 30rem;

  .title {
    margin-left: 1rem;
    margin-top: 0.5rem;
  }

  .chart {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    padding: 0;
    width: 100%;
    height: 23rem;

    .chart {
      height: 18rem;
    }
  }
`;

export const VotersInfoContainer = styled(ChartContainer)`
  width: 30rem;
  height: 30rem;

  .title {
    display: flex;
    justify-content: space-between;
  }

  .chart {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 98%;
    height: 38rem;

    .title {
      flex-direction: column;
    }

    .select {
      margin: 1rem auto;
    }

    .chart {
      max-height: 30rem;
    }
  }
`;

export const MapContainer = styled(ChartContainer)``;

export const VotersGenderContainer = styled(ChartContainer)``;
