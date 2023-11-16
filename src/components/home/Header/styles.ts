import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Instruction = styled.div`
  background-color: white;
  padding: 1rem 0.75rem;
  border-radius: 48px;
  border: 1px solid #c3c3c3;
  font-weight: bold;
  font-size: 1.1rem;

  img {
    margin-right: 0.3rem;
  }

  @media (max-width: 1320px) {
    margin-right: calc(40vw - 17rem);
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background-color: #232323;
  border-radius: 20px;

  strong {
    color: white;
    font-size: 0.75rem;
  }

  span {
    color: #5c5c5c;
    font-size: 0.5rem;
  }

  img.user {
    width: 2.625rem;
    height: 2.625rem;
    object-fit: cover;
  }

  .arrow {
    width: 0.75rem;
    height: 0.75rem;
    margin-left: 0.3rem;
  }
`;

export const HeaderMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4rem;
`;

export const Candidate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const CandidateInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  .info {
    display: flex;
    flex-direction: column;
  }

  strong {
    color: #292d32;
    font-size: 1.625rem;
    font-weight: 600;
    line-height: 1.25;
  }

  .candidateNumber {
    color: #8790ab;
    font-size: 0.75rem;
  }

  .status {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    color: #22c24f;
    font-size: 0.5625rem;
  }

  .statusCircle {
    width: 0.3125rem;
    height: 0.3125rem;
    background-color: #22c24f;
    border-radius: 50%;
  }
`;
