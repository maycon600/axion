import styled from "styled-components";

export const Container = styled.div`
  border-radius: 9.201px;
  border: 1.496px solid #398dee;
  background: radial-gradient(
    340.32% 136.38% at 0% 3.35%,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(4px);
  width: 90%;
  text-align: justify;
  padding: 3.2rem;
  color: white;
  font-size: 1.2rem;
  margin: auto;
  position: absolute;
  bottom: 3rem;
  left: 5%;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: column;

  strong {
    font-size: 1.5rem;
  }

  span {
    font-size: 0.9rem;
  }
`

export const Arrows = styled.div`
  
`
