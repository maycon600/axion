import { Col, Row } from "react-bootstrap";
import styled from "styled-components";

export const TableContainer = styled.div`
  overflow: auto;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.color.secondary_60};

  margin-top: 3%;

  @media (min-width: 1200px) {
    margin-right: 0;
  }
`;

export const TableContent = styled.div`
  overflow: hidden;
  flex-direction: column;
  margin-top: 10px;
  width: 90rem;

  @media (min-width: 1200px) {
    width: 100%;
  }
`;

export const TableHeader = styled(Row)`
  padding: 5px 0;
  font-weight: bold;
  margin: 0;
`;

export const TableCol = styled(Col)`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const TableRows = styled(TableContainer)`
  margin: 0;
  font-size: 1.25rem;
`;

export const TableRow = styled(TableHeader)`
  font-weight: normal;
  margin-top: 5px;
  color: ${({ theme }) => theme.color.gray_80};
`;
