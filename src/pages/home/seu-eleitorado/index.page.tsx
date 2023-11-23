import { Sidebar } from "@/components/Global/Sidebar";
import { HeaderComponent } from "@/components/home/Header";
import { SeuEleitoradoCards } from "@/components/home/seu-eleitorado/Cards";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Container, Content, Main } from "./styles";

export default function SeuEleitorado() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home/seu-eleitorado");
    }
  }, []);
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <SeuEleitoradoCards />
        </Main>
      </Content>
    </Container>
  );
}
