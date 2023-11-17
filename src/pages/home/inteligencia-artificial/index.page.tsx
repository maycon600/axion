import { Sidebar } from "@/components/Global/Sidebar";
import {
  CardsContainer,
  ChatBody,
  ChatContainer,
  ChatHeader,
  Container,
  Content,
  InstructionContainer,
  Main,
} from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { SolutionsCard } from "@/components/home/SolutionsCard";
import { UserMessage } from "@/components/home/UserMessage";
import { IaMessage } from "@/components/home/IaMessage";

export default function InteligenciaArtificial() {
  const router = useRouter();

  const cards = [1, 2, 3, 4];

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
                Clique nos <em>Cards</em> para Extrair o Máximo da <br />{" "}
                Inteligência Artificial Axioon - Focada em Campanhas
              </div>
            </div>
          </InstructionContainer>
          <CardsContainer>
            {cards.map((card) => (
              <SolutionsCard
                name="Analise de Campanhas e Afins"
                update_time="12/09/2023"
                description="Passe informações sobre seu cliente, quais são as especificidades do contrato e deixe a Jurid IA trabalhar para você."
              />
            ))}
          </CardsContainer>

          <ChatContainer>
            <ChatHeader>
              <img src="/axionLogo.png" alt="" />
              <div
                style={{
                  padding: "0.2rem",
                  borderRadius: "10px",
                  background:
                    "linear-gradient(109deg, #D8D8D8 0%, #0D123C 96.63%)",
                }}
              >
                <img src="/ia.png" alt="" />
              </div>
            </ChatHeader>
            <ChatBody>
              <UserMessage
                content={
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat ut blanditiis dicta maxime perferendis quas nihil natus nisi, molestias quasi culpa aliquid, inventore dolor animi non expedita doloremque nulla repellat!"
                }
              />
              <IaMessage />
            </ChatBody>
          </ChatContainer>
        </Main>
      </Content>
    </Container>
  );
}
