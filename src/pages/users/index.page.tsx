import { HeaderComponent } from "@/components/Global/Header";
import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, Main } from "./styles";
import { UsersTable } from "@/components/users/Table";
import { AddNewUserModal } from "@/components/users/AddNewUser";
import { useState } from "react";

export default function Users() {
  const [showAddNewUserModal, setShowAddNewUserModal] = useState(false);

  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <header>
            <h2>Usuários</h2>
            <button onClick={() => setShowAddNewUserModal(true)}>
              Adicionar Novo Usuário
            </button>
          </header>

          <UsersTable />
        </Main>
      </Content>

      <AddNewUserModal
        show={showAddNewUserModal}
        onHide={() => setShowAddNewUserModal(false)}
      />
    </Container>
  );
}
