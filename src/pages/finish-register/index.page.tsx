import { Footer } from "@/components/register-account/Footer";
import { AccessButton, Container } from "./styles";
import Theme from "@/styles/themes";
import { useRouter } from "next/router";

export default function FinishRegisterAccount() {
  const router = useRouter();

  return (
    <Container>
      <strong>Cadastro aprovado!</strong>
      <span
        style={{
          color: Theme.color.gray_80,
          maxWidth: "480px",
          textAlign: "center",
        }}
        className="mt-3 mb-3"
      >
        Acesse agora mesmo o sistema Axion e ganhe tempo tomando decisões
        inteligentes.
      </span>
      <img src="/verify.svg" alt="" />
      <AccessButton onClick={() => router.push("/")}>Acessar Plataforma</AccessButton>
      <Footer />
    </Container>
  );
}
