import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Content = styled.div`
  background-color: ${({ theme }) => theme.color.gray_10};
  margin: 0.37rem 0 1rem 0.4rem;
  border-radius: 25px 0 0 25px;
  padding: 1.2rem;
  position: relative;
  width: calc(100% - 17rem);
  left: calc(100% - 17rem);
`;

export const ChatConteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 50px;
  padding: 2rem 0 1rem;
`;

export const ChatHeader = styled.header`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

export const IaImgContainer = styled.div`
  background: linear-gradient(109deg, #d8d8d8 0%, #0d123c 96.63%);
  border-radius: 6px;
  width: 48px;
  height: 29px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatFooter = styled.div`
  
`
