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

export default function PersonalData() {
  const router = useRouter();

  return (
    <Container>
      <RegisterAccountHeader />
      <Main>
        <RegisterForm>
          <RegisterFormHeader>
            <strong>Dados Básicos</strong>
            <span>Preencha os campos logo abaixo</span>
          </RegisterFormHeader>

          <FormGroup>
            <label htmlFor="cpf">Seu CPF</label>
            <input type="text" id="cpf" placeholder="Digite seu CPF" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="bithDate">Data de Nascimento</label>
            <input type="date" placeholder="Sua Data de Nascimento" />
          </FormGroup>
          <label
            htmlFor="gender"
            style={{ fontWeight: "bold", marginBottom: "1rem" }}
          >
            Sexo
          </label>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "0.3rem" }}>
              <input type="radio" name="gender" id="male" />
              <label htmlFor="male">Masculino</label>
            </div>

            <div style={{ display: "flex", gap: "0.3rem" }}>
              <input type="radio" name="gender" id="female" />
              <label htmlFor="female">Feminino</label>
            </div>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
            <BackButton onClick={() => router.back()}>Voltar</BackButton>
            <NextButton onClick={() => router.push("/company-data")}>
              Continuar
            </NextButton>
          </div>
        </RegisterForm>
        <ArtSection></ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
