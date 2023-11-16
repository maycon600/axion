import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Instruction = styled.div`
  background-color: white;
  padding: 1rem 0.75rem;
  border-radius: 48px;
  border: 1px solid #c3c3c3;
  font-weight: bold;
  font-size: 1.375rem;
  margin-right: 5vw;

  img {
    margin-right: 0.3rem;
  }
`;

export const UserMenu = styled.div`
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
