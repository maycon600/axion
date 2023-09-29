import { useState } from "react";
import {
  ArtSection,
  AxionLogo,
  Container,
  FormGroup,
  GoogleLogin,
  LoginForm,
  LoginFormHeader,
} from "./styles";

export default function Login() {
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
            margin: "3rem 0",
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
            }}
          >
            ou
          </p>
        </div>

        <FormGroup>
          <label htmlFor="email">Seu Email</label>
          <input type="email" />
        </FormGroup>

        <FormGroup style={{ position: "relative" }}>
          <label htmlFor="password">Senha</label>
          <input type={showPassword} />
          <img src="/eye-slash.svg" alt="" onClick={toggleShowPassword} />
        </FormGroup>

        <button>Esqueceu sua senha?</button>

        <button>Entrar</button>

        <p>
          Não tem uma conta? <a href="#">Cadastre-se</a>
        </p>
      </LoginForm>
      <ArtSection>
        <img src="https://picsum.photos/2000/1500" alt="" />
      </ArtSection>
    </Container>
  );
}
