import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.gray_10};
  width: calc(100% - 17rem);
`;

export const Main = styled.main`
  margin: 2%;
  background-color: white;
  border-radius: 10px;
  padding: 2.25rem;

  header {
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.color.gray_100};

    h2 {
      font-size: 1.6rem;
      font-weight: 600;
    }

    button {
      background-color: ${({ theme }) => theme.color.brand_blue};
      color: white;
      border: 0;
      border-radius: 6px;
      padding: 0.75rem 3rem;
      transition: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.color.brand_blue_hover};
      }
    }
  }
`;

export const PaymentAndEmail = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.2rem 0 2.7rem;

  .payment {
    display: flex;
    border: 1px solid ${({ theme }) => theme.color.gray_60};
    border-radius: 5px;
  }

  .payment-info {
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;

    span {
      font-size: 0.9rem;
      color: ${({ theme }) => theme.color.gray_90};
    }

    strong {
      font-size: 2rem;
      font-weight: 500;
      color: ${({ theme }) => theme.color.gray_90};
    }
  }

  .email {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    gap: 0.5rem;

    label {
      font-size: 0.9rem;
      font-weight: 600;
    }

    input {
      border: 1px solid ${({ theme }) => theme.color.gray_60};
      border-radius: 5px;
      padding: 1.25rem 1rem;
      width: 25rem;
    }
  }
`;
