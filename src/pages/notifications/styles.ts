import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.gray_10};
  margin: 0.37rem 0 1rem 0.4rem;
  border-radius: 25px 0 0 25px;
  padding: 1.2rem;
  position: relative;
  width: calc(100% - 17rem);
  left: calc(100% - 17rem);
  align-items: center;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  width: 90%;
  height: 85%;
  margin: 2%;
  border-radius: 10px;
  padding: 2%;
`;

export const NotificationsRows = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray_20};
  color: ${({ theme }) => theme.color.darkBlueAxion};
`;
