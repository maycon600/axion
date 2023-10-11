import styled from "styled-components";

interface Props {
  isVisible: boolean;
}

export const Content = styled.div<Props>`
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  width: 80%;
  margin: auto;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: 3.5rem 0 1.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.color.gray_100};
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
  }

  span {
    text-align: center;
    color: ${({ theme }) => theme.color.gray_100};
  }

  .button1 {
    width: 70%;
    margin: 2rem 0 0.25rem;
  }

  .users-count {
    margin-bottom: 2rem;

    span {
      color: #8790AB;
      font-style: italic;
    }

    strong {
      font-weight: 600;
      color: ${({ theme }) => theme.color.gray_100};
    }
  }
`;

export const EmailInputContainer = styled.div`
  position: relative;

  label {
    display: block;
    margin: 2rem 0 0.5rem;
    font-weight: 600;
  }

  input {
    border: 1px solid ${({ theme }) => theme.color.gray_60};
    border-radius: 5px;
    padding: 1.25rem 1rem;
    width: 28rem;
  }

  select {
    position: absolute;
    bottom: 1.4rem;
    right: 0.8rem;
    border: 0;
  }
`;

export const SuccessModal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin: 3.5rem 0 1.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.color.gray_100};
    font-size: 1.6rem;
    text-align: center;
    font-weight: 600;
  }

  span {
    text-align: center;
    color: ${({ theme }) => theme.color.gray_100};
  }

  .button {
    width: 70%;
    margin: 3rem 0 4.5rem;
  }
`;
