import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, InstructionContainer, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";

export default function InteligenciaArtificial() {
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <InstructionContainer>
            <div className="instruction">
              <img src="/dashboard/click.svg" alt="" />
              <div>
                Clique nos <em>Cards</em> para Extrair o Máximo da <br/> Inteligência
                Artificial Axioon - Focada em Campanhas
              </div>
            </div>
          </InstructionContainer>
        </Main>
      </Content>
    </Container>
  );
}
