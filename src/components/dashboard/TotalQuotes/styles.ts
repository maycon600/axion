import styled from "styled-components";

interface Props {
  barColor: string;
}

export const Container = styled.div<Props>`
  position: relative;
  width: 22rem;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);

  header {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.color.gray_100};
  }

  .verticalBar {
    position: absolute;
    left: 0.8rem;
    height: 3.5rem;
    border: 2px solid ${({ barColor }) => barColor};
    border-radius: 50px;
  }
`;

export const Quotes = styled.div`
  font-size: 2.75rem;
  font-weight: 600;
  color: ${({ theme }) => theme.color.gray_100};
`