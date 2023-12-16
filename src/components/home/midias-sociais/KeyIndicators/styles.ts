import styled from "styled-components";

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
  align-items: center;
  padding: 1rem;

  @media (max-width: 550px) {
    flex-direction: column;

    padding: 0.2rem;
  }
`;
