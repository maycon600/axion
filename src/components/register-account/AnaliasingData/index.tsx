import Theme from "@/styles/themes";
import { Container } from "./styles";
import { Footer } from "@/components/Global/Footer";
import { useState } from "react";

export function AnialiasingFormData() {
  const [dots, setDots] = useState('.');

  function loadingEffect() {
    let dots = 1;
    const text = "Carregando";
    const intervalId = setInterval(() => {
      console.clear();
      console.log(text + ".".repeat(dots));
      setDots((dots % 3) + 1); // Alterna entre 1, 2 e 3
    }, 500);

    setTimeout(() => {
      clearInterval(intervalId);
      console.clear();
      console.log("Carregamento concluído!");
    }, 5000); // Este exemplo pára após 5 segundos (opcional)
  loadingEffect();

  }


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
        <span style={{ color: Theme.color.purple_light }}>
          CARREGANDO{dots}
        </span>
      </Container>
      ;
    </>
  );
}
