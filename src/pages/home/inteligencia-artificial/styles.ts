import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div`
  display: flex;
  background-color: #111;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.gray_10};
  width: calc(100% - 17rem);
  margin: 0.37rem 0 1rem 0.4rem;
  border-radius: 25px 0 0 25px;
  padding: 1.2rem;
`;

export const Main = styled.main`
  margin: 2%;
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

export const InstructionContainer = styled.div`
  display: flex;
  justify-content: center;

  .instruction {
    background-color: white;
    display: flex;
    gap: 0.5rem;
    text-align: center;
    width: 35rem;
    padding: 1rem 0.75rem;
    border-radius: 48px;
    border: 1px solid #c3c3c3;
    font-weight: bold;
    font-size: 1.1rem;

    img {
      margin-right: 0.3rem;
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChatContainer = styled.div`
  margin-top: 2rem;
`;

export const ChatHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
`;

export const ChatBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: white;
  margin-top: 1rem;
  border-radius: 30px;
  padding: 1rem;
`;

