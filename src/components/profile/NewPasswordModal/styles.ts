import styled from "styled-components";


export const Content = styled.main`
  margin: auto;
`;

export const Close = styled.button`
  background-color: transparent;
  border: 0;

  position: absolute;
  top: 2rem;
  right: 2rem;
  transition: 0.3s;
  color: ${({theme}) => theme.color.gray_100};

  &:hover {
    color: ${({theme}) => theme.color.gray_80};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.4em;
`;

export const FormHeader = styled.div`
  margin-bottom: 2rem;
  div {
    display: flex;
    justify-content: center;
    margin: 3.5rem 0 1.5rem;
  }

  h1 {
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
  }

  span {
    font-weight: 0.875rem;
    text-align: center;
    color: ${({ theme }) => theme.color.gray_80};
  }
`;

export const FormGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  label {
    font-weight: 600;
  }

  input {
    padding: 1.25rem 1rem;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.color.gray_20};
    outline: 0;
    color: ${({ theme }) => theme.color.gray_100};
    font-size: 0.9rem;
  }
`;
