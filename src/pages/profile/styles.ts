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
  background-color: white;
`

export const Main = styled.main`
  margin: 2%;
  background-color: white;
  border-radius: 10px;
  padding: 2.25rem;

  header {
    display: flex;
    justify-content: space-between;
    color: ${({theme}) => theme.color.gray_100};

    h2 {
      font-size: 1.6rem;
      font-weight: 600;
    }

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

  label {
    font-weight: 600;
  }
`

export const PersonalInfo = styled.div`
  display: grid;
  grid-template-columns: 8rem 1fr 1fr;
  justify-items: center;
  margin-top: 4rem;
`

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }

  button {
    background-color: transparent;
    border: 0;
    color: ${({theme}) => theme.color.brand_blue};
  }
`

export const FormGroup = styled.div`
 display: flex;
 gap: 0.5rem;
 flex-direction: column;

 input {
  padding: 1.25rem 1rem;
  width: 30vw;
  border-radius: 5px;
  border: 1px solid ${({theme}) => theme.color.gray_20};
  outline: 0;
  color: ${({theme}) => theme.color.gray_100};
  font-size: 0.9rem;
 }
`

export const FormSection1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const FormSection2 = styled(FormSection1)`
  
`