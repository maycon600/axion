import { styled } from "styled-components";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div`
  display: flex;
  background-color: ${({theme}) => theme.color.gray_10};
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

export const Main = styled.main`
  margin: 2%;
  background-color: white;
  border-radius: 10px;
  padding: 2.25rem;

  header {
    display: flex;
    justify-content: space-between;

    button {
      background-color: ${({theme}) => theme.color.brand_blue};
      color: white;
      border: 0;
      border-radius: 6px;
      padding: 0.75rem 3rem;
      transition: 0.3s;

      &:hover {
        background-color: ${({theme}) => theme.color.brand_blue_hover};
      }
    }
  }
`

export const PersonalInfo = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr 1fr;
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    background-color: transparent;
    border: 0;
    color: ${({theme}) => theme.color.brand_blue};
  }
`

export const FormSection1 = styled.div`

`

export const FormSection2 = styled.div`
  
`