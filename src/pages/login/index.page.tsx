import {
  ArtSection,
  Container,
  FormGroup,
  GoogleLogin,
  LoginForm,
  LoginFormHeader,
} from "./styles";

export default function Login() {
  return (
    <Container>
      <LoginForm>
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
          }}
        >
          <div style={{ border: "1px solid gray" }} />
          <p
            style={{
              textAlign: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: '0 2rem',
            }}
          >
            ou
          </p>
        </div>

        <FormGroup>
          <label htmlFor="email">Seu Email</label>
          <input type="email" />
        </FormGroup>

        <FormGroup>
          <label htmlFor="password">Senha</label>
          <input type="password" />
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
