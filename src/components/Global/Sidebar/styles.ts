import styled from "styled-components";

export const SidebarContainer = styled.nav`
  background-color: #111;
  color: white;
  width: 17rem;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: auto;
`;

export const AxionLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMenu = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background-color: ${({ theme }) => theme.color.gray_50};
  width: 100%;

  img {
    width: 3rem;
    height: 3rem;
    object-fit: cover;
  }
`;

export const NameAndEmail = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 0.9rem;
    font-weight: normal;
  }

  span {
    font-size: 0.7rem;
    color: ${({ theme }) => theme.color.gray_40};
  }
`;
