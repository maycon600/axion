import { Sidebar } from "@/components/Global/Sidebar";
import {
  AvatarContainer,
  Container,
  Content,
  FormGroup,
  FormSection1,
  FormSection2,
  Header,
  Main,
  PersonalInfo,
} from "./styles";
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
              <FormGroup>
                <label htmlFor="name">Nome Completo</label>
                <input type="text" id="name" value={"Robert Martins"} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={"rober@axion.com.br"} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" value={"(11) 99999-999"} />
              </FormGroup>
            </FormSection1>

            <FormSection2>
              <FormGroup>
                <label htmlFor="CPF">Seu CPF</label>
                <input type="text" id="CPF" value={"111.111.111-11"} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input type="date" id="birthDate" />
              </FormGroup>
              <div>
                <label htmlFor="gender">Sexo</label>
                <div>
                  <input type="radio" name="gender" id="male" />
                  <label htmlFor="male">Masculino</label>

                  <input type="radio" name="gender" id="female" />
                  <label htmlFor="female">Feminino</label>
                </div>
              </div>
            </FormSection2>
          </PersonalInfo>
        </Main>
      </Content>
    </Container>
  );
}
