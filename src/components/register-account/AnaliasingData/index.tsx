import Theme from "@/styles/themes";
import { Container } from "./styles";
import { Footer } from "@/components/Global/Footer";

export function AnialiasingFormData() {
  return (
    <>
      <Container>
        <strong>Estamos analisando!</strong>
        <span
          style={{
            color: Theme.color.gray_80,
            maxWidth: "400px",
            textAlign: "center",
          }}
          className="mt-3 mb-5"
        >
          Isso leva menos de 1 minuto, aguarde aqui mesmo.
        </span>
        <div className="custom-loader mt-3 mb-5" />
        <span style={{ color: Theme.color.purple_light }}>CARREGANDO...</span>
      </Container>
      ;
    </>
  );
}
