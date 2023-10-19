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

export const Feedback = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
`;

export const FeedbackGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: "0.1rem";

  img {
    width: 1.5rem;
    height: auto;
  }

  strong {
    font-size: 2rem;
  }

  span {
    font-size: 0.8rem;
    color: ${({ theme }) => theme.color.gray_90};
  }

  .group {
    display: flex;
    gap: 0.1rem;
    align-items: center;
  }
`;
