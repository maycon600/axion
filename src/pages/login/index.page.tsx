import { useState } from "react";
import {
  ArtSection,
  AxionLogo,
  Container,
  FormGroup,
  GoogleLogin,
  LoginButton,
  LoginForm,
  LoginFormHeader,
  Main,
  PasswordRecovery,
} from "./styles";
import Theme from "@/styles/themes";
import { Footer } from "@/components/Global/Footer";
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState("password");

  function toggleShowPassword() {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  }

  return (
    <Container>
      <Main>
        <LoginForm>
          <AxionLogo>
            <img src="/axionLogo.svg" alt="" />
          </AxionLogo>
          <LoginFormHeader>
            <strong>Faça seu login para utilizar a plataforma.</strong>
            <span>Acesse aqui todas as suas contas pelo painel principal.</span>
          </LoginFormHeader>
          <GoogleLogin>
            <img src="/Google.svg" alt="" />
            <strong>Entrar com conta Google</strong>
          </GoogleLogin>
          <div
            style={{
              position: "relative",
              margin: "5vh 0",
            }}
          >
            <div style={{ border: "1px solid lightgray" }} />
            <p
              style={{
                color: "lightgray",
                textAlign: "center",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "0 2rem",
                backgroundColor: "white",
              }}
            >
              ou
            </p>
          </div>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <input type="email" />
          </FormGroup>

          <FormGroup style={{ position: "relative" }}>
            <label htmlFor="password">Senha</label>
            <input type={showPassword} />
            <img src="/eye-slash.svg" alt="" onClick={toggleShowPassword} />
          </FormGroup>
          <PasswordRecovery>
            <button onClick={() => router.push("/recover-password")}>
              Esqueceu sua senha?
            </button>
          </PasswordRecovery>
          <LoginButton>Entrar</LoginButton>
          <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
            Não tem uma conta?{" "}
            <span
              style={{ color: Theme.color.brand_blue, cursor: "pointer" }}
              onClick={() => router.push("/register-account")}
            >
              Cadastre-se
            </span>
          </p>
        </LoginForm>
        <ArtSection></ArtSection>
      </Main>
      <Footer />
    </Container>
  );
}
