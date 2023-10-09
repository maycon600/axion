import { Sidebar } from "@/components/Global/Sidebar";
import {
  AvatarContainer,
  CompanyInfo,
  Container,
  Content,
  DeleteAccount,
  FormGroup,
  FormSection,
  Header,
  Main,
  PersonalInfo,
  RadioContainer,
  RadioGroup,
  RadioSelector,
  UpdateInfo,
} from "./styles";
import Theme from "@/styles/themes";
import { NotificationSVG } from "../../../public/sidebar/notification";
import { UserEditSVG } from "../../../public/UserEdit";
import { useState } from "react";
import { TrashCanSVG } from "../../../public/profile/TrashCan";
import { NewPasswordModal } from "@/components/profile/NewPasswordModal";
import { GlobalButton } from "@/components/Global/Button";

export default function Profile() {
  const [selectedGender, setSelectedGender] = useState("");

  const handleRadioChange = (event: { target: { value: string } }) => {
    setSelectedGender(event.target.value);
  };

  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);

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
            <button onClick={() => setShowNewPasswordModal(true)}>
              Trocar Senha
            </button>
          </header>
          <PersonalInfo>
            <AvatarContainer>
              <img src="/sidebar/user.png" alt="" />
              <button>
                <UserEditSVG />
                Substituir
              </button>
            </AvatarContainer>

            <FormSection>
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
            </FormSection>

            <FormSection>
              <FormGroup>
                <label htmlFor="CPF">Seu CPF</label>
                <input type="text" id="CPF" value={"111.111.111-11"} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input type="date" id="birthDate" />
              </FormGroup>

              <div>
                <label htmlFor="gender" style={{ marginBottom: "0.75rem" }}>
                  Sexo
                </label>
                <RadioContainer>
                  <RadioGroup>
                    <RadioSelector
                      htmlFor="male"
                      checked={selectedGender === "male"}
                    >
                      <div />
                    </RadioSelector>
                    <input
                      type="radio"
                      name="gender"
                      id="male"
                      value="male"
                      checked={selectedGender === "male"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="male">Masculino</label>
                  </RadioGroup>

                  <RadioGroup>
                    <RadioSelector
                      htmlFor="female"
                      checked={selectedGender === "female"}
                    >
                      <div />
                    </RadioSelector>
                    <input
                      type="radio"
                      name="gender"
                      id="female"
                      value="female"
                      checked={selectedGender === "female"}
                      onChange={handleRadioChange}
                    />
                    <label htmlFor="female">Feminino</label>
                  </RadioGroup>
                </RadioContainer>
              </div>
            </FormSection>
          </PersonalInfo>

          <div
            style={{
              borderTop: "1px solid" + Theme.color.gray_20,
              margin: "4rem 0 2rem 10rem",
            }}
          />

          <CompanyInfo>
            <div />
            <FormSection>
              <FormGroup>
                <label htmlFor="companyName">Nome da Empresa</label>
                <input type="text" id="companyName" value={"Axion"} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="role">Seu Cargo</label>
                <select>
                  <option value="Funcionário">Funcionário</option>
                </select>
              </FormGroup>
            </FormSection>

            <FormSection>
              <FormGroup>
                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" id="cnpj" value={"11.111.111/1111-11"} />
              </FormGroup>

              <FormGroup>
                <GlobalButton
                  content="Atualizar Cadastro"
                  style={{ marginTop: "1.7rem" }}
                />
              </FormGroup>
              <DeleteAccount>
                <button>
                  <TrashCanSVG />
                  <span>Excluir Cadastro?</span>
                </button>
              </DeleteAccount>
            </FormSection>
          </CompanyInfo>
        </Main>
      </Content>

      <NewPasswordModal
        show={showNewPasswordModal}
        onHide={() => setShowNewPasswordModal(false)}
      />
    </Container>
  );
}
