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
