import { Sidebar } from "@/components/Global/Sidebar";
import { AvatarContainer, Container, Content, FormSection1, FormSection2, Header, Main, PersonalInfo } from "./styles";
import Theme from "@/styles/themes";
import { NotificationSVG } from "../../../public/sidebar/notification";
import { UserEditSVG } from "../../../public/UserEdit";

export default function Profile() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <Header>
          <strong>Seja bem-vindo, Robert</strong>
          <span style={{ color: Theme.color.gray_80 }}>
            <NotificationSVG />
          </span>
        </Header>
        <Main>
          <header>
            <h2>Meu Perfil</h2>
            <button>Trocar Senha</button>
          </header>
          <PersonalInfo>
            <AvatarContainer>
              <img src="/sidebar/user.png" alt="" />
              <button>
                <UserEditSVG />
                Substituir
              </button>
            </AvatarContainer>
            
            <FormSection1>
              <input type="text" />
            </FormSection1>

            <FormSection2>
            <input type="text" />
            </FormSection2>
          </PersonalInfo>
        </Main>
      </Content>
    </Container>
  );
}
