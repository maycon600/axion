import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.gray_10};
  width: 100%;
  margin: 0.37rem 0 1rem 0.4rem;
  border-radius: 25px 0 0 25px;
  padding: 1.2rem;
  position: relative;
  left: 100%;
`;

export const Main = styled.main`
  border-radius: 10px;
  /* padding: 2.25rem; */
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
  margin: 2rem auto 0;
  max-width: 1200px;
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
  border-radius: 30px 30px 0 0;
  padding: 1rem;
  height: 40rem;
  overflow: auto;
`;

export const ChatFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7rem;
  background-color: #0d123c;
  border-radius: 0 0 20px 20px;
  padding: 0 2.5rem 0 1.8rem;

  textarea {
    padding: 0.5rem;
    font-size: 1.2rem;
    height: 5rem;
    resize: none;
    width: 90%;
    border-radius: 10px;
  }

  img {
    cursor: pointer;
    width: 3.5rem;
    height: 3.5rem;
    transition: 0.2s;
    object-fit: contain;

    &:hover {
      scale: 1.04;
    }
  }
`;
