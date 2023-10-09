import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: calc(100% - 17rem);
`

export const Header = styled.header`
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`
