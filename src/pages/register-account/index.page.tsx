import { Footer } from "@/components/Global/Footer";
import { RegisterAccountHeader } from "@/components/Global/Header";
import { useRouter } from "next/router";
import {
  ArtSection,
  Container,
  FormGroup,
  LoginButton,
  Main,
  RegisterForm,
  RegisterFormHeader,
  TermsContainer,
} from "./styles";

export default function RegisterAccount() {
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
            <label htmlFor="name">Nome Completo</label>
            <input type="text" id="name" placeholder="Seu nome" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Digite seu email" />
          </FormGroup>
          <FormGroup>
            <label htmlFor="phoneNumber">Telefone</label>
            <input
              type="text"
              id="phoneNumber"
              placeholder="Digite seu telefone"
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="password">Crie uma senha</label>
            <input type="password" placeholder="Crie uma senha segura" />
          </FormGroup>

          <TermsContainer>
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              Ao informar meus dados, tenho ciência dos{" "}
              <span>Termos de Uso</span> e da{" "}
              <span>Política de Privacidade</span>.
            </label>
          </TermsContainer>

          <LoginButton onClick={() => router.push("/personal-data")}>Próximo</LoginButton>
        </RegisterForm>
        <ArtSection></ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
