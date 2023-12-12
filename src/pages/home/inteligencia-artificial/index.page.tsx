import RootLayout from "@/components/Layout";
import { HeaderComponent } from "@/components/home/Header";
import gsap from "gsap";
import { useRouter } from "next/router";
import { useLayoutEffect, useRef } from "react";
import { ChatConteiner, ChatFooter, ChatHeader, Content, IaImgContainer } from "./styles";
import Image from "next/image";

export default function InteligenciaArtificial() {
  const router = useRouter();

  const cards = [1, 2, 3, 4];

  const main = useRef(null);
  const content = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".mainContent", {
        x: "-100%",
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


  // function getTextareaHeight(event) {

  //   const textarea = document.getElementById('texto') as HTMLTextAreaElement;
  //   const scrollHeight = textarea('scrollHeight') as number;
  //   const textareaHeight = textarea.height() as number;
  //   if (scrollHeight > textareaHeight + 10) {
  //       if (scrollHeight > 500) return;
  //       textarea.css('height', scrollHeight);
  //   }
  // }

  return (
    <main ref={main}>
      <RootLayout fadeOut={() => fadeOut()}>
        <Content className="mainContent" ref={content} style={{ opacity: 1 }}>
          <HeaderComponent fadeOut={() => fadeOut()} />
          <ChatConteiner>
            <ChatHeader>
              <Image width={343} height={67} src={"/axionLogo.png"} alt="" />
              <IaImgContainer>
                <Image width={32} height={20} src={"/ia.png"} alt="" />
              </IaImgContainer>
            </ChatHeader>
            <div
              style={{
                fontFamily: "Bruno Ace SC",
                fontSize: "2rem",
                color: "#0D123C",
              }}
            >
              Como posso te Ajudar Hoje?
            </div>
            <ChatFooter>
              <textarea name="" id="texto" />
            </ChatFooter>
          </ChatConteiner>
        </Content>
      </RootLayout>
    </main>
  );
}
