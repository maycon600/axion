import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 4rem;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const LoginForm = styled.div`
  width: 50vw;
  padding: 0 8%;
`;

export const AxionLogo = styled.div`
  display: flex;
  justify-content: center;
  padding: 5vh;
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4vh 0;

  & label {
    font-size: 0.9rem;
    font-weight: 600;
    color: ${({ theme }) => theme.color.gray_80};
  }

  & input {
    padding: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    transition: 0.3s;
  }
`;

export const RecoveryButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border-radius: 5px;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.color.darkBlueAxion};
  color: white;
  font-weight: bold;
`;

export const Guide = styled(LoginFormHeader)``;

export const ArtSection = styled.div`
  align-self: flex-start;
  background-image: url("/foto.png");
  min-height: 100vh;
  height: 100%;
  width: 50vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top center;
`;
