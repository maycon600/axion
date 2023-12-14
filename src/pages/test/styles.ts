import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  padding-bottom: 5rem;
  min-height: 100vh;
`;
export const Main = styled.main`
  display: flex;
  justify-content: space-around;
  margin: 2rem 0;
`;

export const PlanCard = styled.div`
  width: 24.5rem;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid #0d123c;
  background: #f3f3f6;
  box-shadow: 4px 4px 2px 0px rgba(13, 18, 60, 0.3);
`;

export const PlanCardHeader = styled.header`
  display: flex;
  flex-direction: column;

  img {
    align-self: center;
  }

  strong {
    font-family: "Architects Daughter", cursive;
    align-self: flex-end;
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const PlanPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.2;

  strong {
    font-weight: 400;
  }
`;

export const PlanBenefits = styled.div`
  font-size: 1.3rem;
  padding-bottom: 3rem;
`;

export const PlanButton = styled.div`
  display: flex;
  justify-content: center;

  button {
    border-radius: 10px;
    background: #22c24f;
    border: 0;
    width: 13rem;
    height: 3rem;
    font-size: 1.5rem;
    color: white;

    transition: 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
