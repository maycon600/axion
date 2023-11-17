import styled from "styled-components";

export const IaMessageContainer = styled.div`
  white-space: break-spaces;
  margin-right: 4vw;
  border: 1px solid #0d123c;
  padding: 0.75rem 2.4rem;
  border-radius: 0 20px 20px 20px;
  background-color: #282c49;

  div {
    margin: 0;
    color: white;
    text-align: justify;
    font-family: Archivo;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2rem;
  }
`;

export const MessageHeader = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  padding: 0.8rem 0;
`;
