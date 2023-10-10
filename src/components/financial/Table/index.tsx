import Theme from "@/styles/themes";
import { PaymentStatus } from "../PaymentStatus";
import {
  TableCol,
  TableContainer,
  TableContent,
  TableHeader,
  TableRow,
  TableRows,
} from "./styles";

export function FinancialTable() {
  const data = [1, 2, 3, 4];

  return (
    <TableContainer>
      <TableContent>
        <TableHeader>
          <TableCol xs="2">Data</TableCol>
          <TableCol xs="3">Descrição</TableCol>
          <TableCol xs="3">Valor</TableCol>
          <TableCol xs="2">Status</TableCol>
          <TableCol xs="2">Recibo</TableCol>
        </TableHeader>
        <TableRows>
          {data.map((item) => (
            <>
              <TableRow>
                <TableCol xs="2">05 Nov, 2023</TableCol>
                <TableCol xs="3">Plano Empresarial</TableCol>
                <TableCol xs="3">R$ 1.550,00</TableCol>
                <TableCol xs="2">
                  <PaymentStatus />
                </TableCol>
                <TableCol xs="2" style={{
                  color: Theme.color.brand_blue,
                  cursor: 'pointer'
                }}>Ver invoice</TableCol>
              </TableRow>
              <hr />
            </>
          ))}
        </TableRows>
      </TableContent>
    </TableContainer>
  );
}
