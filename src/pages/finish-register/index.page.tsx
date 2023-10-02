import { Footer } from "@/components/Global/Footer";
import { AccessButton, Container } from "./styles";
import Theme from "@/styles/themes";

export default function FinishRegisterAccount() {
  return (
    <Container>
      <strong>Cadastro aprovado!</strong>
      <span
        style={{
          color: Theme.color.gray_80,
          maxWidth: "480px",
          textAlign: "center",
        }}
        className="mt-3 mb-5"
      >
        Acesse agora mesmo o sistema Axion e ganhe tempo tomando decisões
        inteligentes.
      </span>
      <img src="/verify.svg" alt="" />
      <AccessButton>Acessar Plataforma</AccessButton>
      <Footer />
    </Container>
  );
}
