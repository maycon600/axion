import { Sidebar } from "@/components/Global/Sidebar";
import {
  CardsContainer,
  ChatBody,
  ChatContainer,
  ChatFooter,
  ChatHeader,
  Content,
  InstructionContainer,
  Main,
} from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { SolutionsCard } from "@/components/home/inteligencia-artificial/SolutionsCard";
import { UserMessage } from "@/components/home/inteligencia-artificial/UserMessage";
import { IaMessage } from "@/components/home/inteligencia-artificial/IaMessage";
import RootLayout from "@/components/Layout";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function InteligenciaArtificial() {
  const router = useRouter();

  const cards = [1, 2, 3, 4];

  const main = useRef(null);
  const content = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        x: "-114.5%",
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
      });
    }, main);
    return () => ctx.revert();
  }, []);

  const fadeOut = () => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        opacity: 0,
        duration: 0.5,
      });
    }, main);
    return () => ctx.revert();
  };

  return (
    <main ref={main}>
      <RootLayout>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <HeaderComponent fadeOut={() => fadeOut()} />
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
                <IaMessage
                  content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                commodi necessitatibus voluptas nisi iste eos hic magnam, delectus magni
                adipisci sint repudiandae culpa animi voluptatem vitae repellat natus
                ipsa veritatis."
                />
              </ChatBody>
              <ChatFooter>
                <textarea placeholder="Escreva sua mensagem" />
                <img src="/dashboard/iaSendMessage.svg" alt="" />
              </ChatFooter>
            </ChatContainer>
          </Main>
        </Content>
      </RootLayout>
    </main>
  );
}
