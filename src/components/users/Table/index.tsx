import Theme from "@/styles/themes";
import {
  TableCol,
  TableContainer,
  TableContent,
  TableHeader,
  TableRow,
  TableRows,
} from "./styles";

export function UsersTable() {
  const data = [1, 2, 3, 4];

  return (
    <TableContainer>
      <TableContent>
        <TableHeader>
          <TableCol xs="3">Usuário</TableCol>
          <TableCol xs="3">Permissão</TableCol>
          <TableCol xs="3">Última atividade</TableCol>
          <TableCol xs="3">Ações</TableCol>
        </TableHeader>
        <TableRows>
          {data.map((item) => (
            <>
              <TableRow>
                <TableCol xs="3">
                  <img
                    src="/sidebar/user.png"
                    alt=""
                    style={{ width: "2rem", height: "2rem", marginRight: '1rem' }}
                  />
                  <span>robert@axion.com.br</span>
                </TableCol>
                <TableCol xs="3">Admin</TableCol>
                <TableCol xs="3">Há 2 minutos</TableCol>
                <TableCol
                  xs="3"
                  style={{
                    color: Theme.color.brand_blue,
                    cursor: "pointer",
                  }}
                >
                  Editar
                </TableCol>
              </TableRow>
              <hr />
            </>
          ))}
        </TableRows>
      </TableContent>
    </TableContainer>
  );
}
