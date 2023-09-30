import styled from "styled-components";

export const RegisterHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 4rem;

  button {
    padding: 0.6rem 0.8rem;
    border: 1px solid ${({ theme }) => theme.color.darkBlueAxion};
    border-radius: 5px;
    color: ${({ theme }) => theme.color.darkBlueAxion};
    font-weight: bold;
    margin-right: 5%;
    transition: 0.3s;

    &:hover {
      background-color: ${({ theme }) => theme.color.darkBlueAxion};
      color: white;
    }
  }
`;
