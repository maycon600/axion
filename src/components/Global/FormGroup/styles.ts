import styled from "styled-components";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2vh;

  & label {
    font-size: 0.9rem;
    font-weight: 500;
  }

  & input {
    padding: 0.5rem;
    border: 1px solid lightgray;
    border-radius: 5px;
    transition: 0.3s;
  }

  img {
    position: absolute;
    right: 1rem;
    bottom: 0.6rem;
    cursor: pointer;
  }
`;
