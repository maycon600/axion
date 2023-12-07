import styled from "styled-components";

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  span {
    font-size: 1.1rem;
  }
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  height: 11px;
  width: 9.25rem;
`;

interface PreviousProps {
  width: string;
}

export const PreviousValueBar = styled.div<PreviousProps>`
  position: relative;
  height: 100%;
  background: linear-gradient(
    270deg,
    #00b132 0%,
    rgba(0, 145, 41, 0.4) 106.97%
  );
  border-radius: 10px 0 0 10px;
  width: ${({ width }) => width};
  transition: 0.5s;
`;

export const Marker = styled.div`
  position: absolute;
  right: 0;
  bottom: -4px;
  width: 3px;
  height: 18px;
  background-color: #3c3c3c;
  border-radius: 2px;
`;

interface CurrentProps {
  width: string;
}

export const CurrentValueBar = styled.div<CurrentProps>`
  height: 100%;
  width: ${({ width }) => width};
  background-color: #06b236;
  opacity: 0.4;
  border-radius: 0 10px 10px 0;
`;
