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

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  width: 35rem;
  height: 35rem;
  background-color: #fff;
  border-radius: 10px;
  border: 0.3px solid #c3c3c3;

  @media (max-width: 1530px) {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 1360px) {
    width: 26rem;
    height: 26rem;
  }

  @media (max-width: 1230px) {
    width: 90%;
    height: 35rem;
  }
`;

export const AgeGroupLegend = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ChartContent = styled.div`
  width: 100%;
  height: 100%;
`;
