import { Arrows, Author, Container } from "./styles";

export function Messages() {
  return (
    <div>
      <Container>
        <p>
          <strong>
            "Usar a plataforma da Axion revolucionou a forma como lidamos com
            nossos casos e processos, é incrível ter todos os dados de ua
            empresa centralizado em um único local."
          </strong>
        </p>
        <Author>
          <strong>Carlos Alberto</strong>
          <span>M2S Advocacia</span>
        </Author>
        <Arrows>
          <div></div>
          <div></div>
        </Arrows>
      </Container>
    </div>
  );
}
