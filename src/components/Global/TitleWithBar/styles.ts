import styled from "styled-components";

interface Props {
  barColor: string;
  width: string;
}

export const TitleContainer = styled.div<Props>`
  position: relative;
  width: ${({ width }) => width};

  .content {
    margin-left: 1rem;

    span {
      font-size: 0.875rem;
    }
  }

  h2 {
    font-size: 1.25rem;
    line-height: 1;
    margin: 0;
  }

  .bar {
    position: absolute;
    left: 0;
    top: 0;
    width: 0.25rem;
    border-radius: 2px;
    height: 3.5rem;
    background-color: ${({ barColor }) => barColor};
  }
`;

export const SubtitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  gap: 0.25rem;

  img.logoAxion {
    width: 5rem;
  }

  .iaContainer {
    align-self: flex-start;
    padding: 0.2rem;
    border-radius: 1.571px;
    background: linear-gradient(109deg, #d8d8d8 0%, #0d123c 96.63%);
    display: flex;
    align-items: center;

    img {
      width: 0.7rem;
    }
  }
`;
