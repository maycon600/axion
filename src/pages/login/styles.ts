import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 5%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LoginForm = styled.div`
  width: 50vw;
`;

export const LoginFormHeader = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.4rem;
  }

  span {
    font-size: 0.9rem;
  }
`;

export const GoogleLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.color.gray_40};
  border-radius: 9px;
  padding: 0.5rem;
  margin: 2rem 0;
`;

export const FormGroup = styled.div``;

export const ArtSection = styled.div`
  width: 50vw;

  img {
    width: 100%;
  }
`;
