import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  padding: 0.75rem;
  width: 20rem;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  transition: 0.2s;

  .content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &:hover {
    transform: scale(1.02);
  }
`;
