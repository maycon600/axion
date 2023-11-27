import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { TitleBottomBar } from "@/components/home/mencoes/TitleBottomBar";
import { NewsCard } from "@/components/home/mencoes/NewsCard";

export default function SeuEleitorado() {
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <TitleBottomBar title="Notícias em Destaque" />
          <NewsCard
            sentiment="positive"
            source="Só Notícias"
            date="22/10/2023"
            content="Candidato a Prefeitura de Sinop é acusado de corrupção"
          />
        </Main>
      </Content>
    </Container>
  );
}
