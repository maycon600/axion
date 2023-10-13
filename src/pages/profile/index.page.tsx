import { GlobalButton } from "@/components/Global/Button";
import { HeaderComponent } from "@/components/Global/Header";
import { Sidebar } from "@/components/Global/Sidebar";
import { BlockAccountModal } from "@/components/profile/BlockAccountModal";
import { NewPasswordModal } from "@/components/profile/NewPasswordModal";
import Theme from "@/styles/themes";
import { useState } from "react";
import { UserEditSVG } from "../../../public/UserEdit";
import { TrashCanSVG } from "../../../public/profile/TrashCan";
import {
  AvatarContainer,
  CompanyInfo,
  Container,
  Content,
  DeleteAccount,
  FormGroup,
  FormSection,
  Main,
  PersonalInfo,
  RadioContainer,
  RadioGroup,
  RadioSelector,
} from "./styles";

export default function Profile() {
  const [selectedGender, setSelectedGender] = useState("male");
  const [showNewPasswordModal, setShowNewPasswordModal] = useState(false);
  const [showBlockAccountModal, setShowBlockAccountModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleRadioChange = (event: { target: { value: string } }) => {
    setSelectedGender(event.target.value);
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
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
                <input type="text" id="name" value={"Robert Martins"} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={"rober@axion.com.br"} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="phone">Telefone</label>
                <input type="tel" id="phone" value={"(11) 99999-999"} disabled={!isEditing} />
              </FormGroup>
            </FormSection>

            <FormSection>
              <FormGroup>
                <label htmlFor="CPF">Seu CPF</label>
                <input type="text" id="CPF" value={"111.111.111-11"} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="birthDate">Data de Nascimento</label>
                <input type="date" id="birthDate" disabled={!isEditing} />
              </FormGroup>

              <div>
                <label htmlFor="gender" style={{ marginBottom: "0.75rem"}}>
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
                      disabled={!isEditing}
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
                      disabled={!isEditing}
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
                <input type="text" id="companyName" value={"Axion"} disabled={!isEditing} />
              </FormGroup>
              <FormGroup>
                <label htmlFor="role">Seu Cargo</label>
                <select disabled={!isEditing}>
                  <option value="Funcionário">Funcionário</option>
                </select>
              </FormGroup>
            </FormSection>

            <FormSection>
              <FormGroup>
                <label htmlFor="cnpj">CNPJ</label>
                <input type="text" id="cnpj" value={"11.111.111/1111-11"} disabled={!isEditing} />
              </FormGroup>

              <FormGroup>
                <GlobalButton
                  content="Atualizar Cadastro"
                  style={{ marginTop: "1.7rem" }}
                  onClick={() => setIsEditing(!isEditing)}
                />
              </FormGroup>
              <DeleteAccount>
                <button onClick={() => setShowBlockAccountModal(true)}>
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

      <BlockAccountModal
        show={showBlockAccountModal}
        onHide={() => setShowBlockAccountModal(false)}
      />
    </Container>
  );
}
