import { Footer } from "@/components/Global/Footer";
import { RegisterAccountHeader } from "@/components/Global/Header";
import { useRouter } from "next/router";
import {
  ArtSection,
  BackButton,
  Container,
  FormGroup,
  Main,
  NextButton,
  RegisterForm,
  RegisterFormHeader,
} from "./styles";

export default function CompanyData() {
  const router = useRouter();

  return (
    <Container>
      <RegisterAccountHeader />
      <Main>
        <RegisterForm>
          <RegisterFormHeader>
            <strong>Dados da Empresa</strong>
            <span>Preencha os campos logo abaixo</span>
          </RegisterFormHeader>

          <FormGroup>
            <label htmlFor="companyName">Nome da Empresa</label>
            <input type="text" id="companyName" placeholder="Digite o nome da empresa" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="cnpj">CNPJ</label>
            <input type="text" placeholder="Digite o CNPJ" />
          </FormGroup>

          <FormGroup>
            <label htmlFor="role">Seu Cargo</label>
            <select name="role" id="role">
              <option value="" selected disabled hidden>Selecione o seu cargo</option>
              <option value="Administrado">Administrador</option>
              <option value="Administrado">Administrador</option>
            </select>
          </FormGroup>
          

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <BackButton onClick={() => router.back()}>Voltar</BackButton>
            <NextButton >Finalizar Cadastro</NextButton>
          </div>
        </RegisterForm>
        <ArtSection></ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
