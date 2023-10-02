import styled from "styled-components";



export const Container = styled.div`
  .load {
    width: 100px;
    height: 100px;
    margin: 110px auto 0;
    border: solid 10px #8822aa;
    border-radius: 50%;
    border-right-color: transparent;
    border-bottom-color: transparent;
    -webkit-transition: all 0.5s ease-in;
    -webkit-animation-name: rotate;
    -webkit-animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;

    transition: all 0.5s ease-in;
    animation-name: rotate;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
`;
