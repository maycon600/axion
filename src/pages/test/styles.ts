import styled from "styled-components";

export const PageContainer = styled.div`
  padding: 2rem;
`;

export const Container = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  background-color: yellow;
  border-radius: 500px 500px 0 0;
  overflow: hidden;
`;

export const Needle = styled.div`
  position: absolute;
  /* background-color: red; */
  height: 5px;
  width: 100%;
  bottom: 0;
  border-radius: 10px;
  transition: 0.5s;

  transform: rotate(140deg);

  .point {
    width: 50%;
    height: 5px;
    background-color: red;
  }
`;
