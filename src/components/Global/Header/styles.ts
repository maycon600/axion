import { Offcanvas } from "react-bootstrap";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 4rem;

  .logo {
    width: 13rem;
    height: auto;

    @media (max-width: 768px) {
      width: 10rem;
    }
  }

  button {
    position: absolute;
    left: 1rem;
    top: calc(50% - 1rem);
    background-color: transparent;
    border: 0;
  }
`;

export const StyledOffcanvas = styled(Offcanvas)`
  background-color: #111;
  max-width: 15rem;
`;
