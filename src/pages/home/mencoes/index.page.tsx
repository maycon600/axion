import { Sidebar } from "@/components/Global/Sidebar";
import { CardsContainer, Container, Content, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { TitleBottomBar } from "@/components/home/mencoes/TitleBottomBar";
import { NewsCard } from "@/components/home/mencoes/NewsCard";
import { TotalQuotes } from "@/components/home/mencoes/TotalQuotes";
import { SentimentChart } from "@/components/home/mencoes/SentimentChart";

export default function SeuEleitorado() {
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <div
              style={{
                width: "17.25rem",
                height: "100%",
                backgroundColor: "white",
              }}
            >
              Score total
            </div>
            <TotalQuotes />

            <SentimentChart
              positive={343349}
              negative={243312}
              neutral={103231}
            />
          </div>

          <TitleBottomBar title="Notícias em Destaque" />
          <CardsContainer>
            <NewsCard
              sentiment="positive"
              source="Só Notícias"
              date="22/10/2023"
              content="Candidato a Prefeitura de Sinop é acusado de corrupção"
              url="https://www.sonoticias.com.br/politica/lucas-do-rio-verde-tera-novo-espaco-de-tradicoes-culturais-com-investimento-de-r-36-milhoes/"
            />
            <NewsCard
              sentiment="neutral"
              source="Só Notícias"
              date="22/10/2023"
              content="Candidato a Prefeitura de Sinop é acusado de corrupção"
              url="https://www.sonoticias.com.br/politica/lucas-do-rio-verde-tera-novo-espaco-de-tradicoes-culturais-com-investimento-de-r-36-milhoes/"
            />
            <NewsCard
              sentiment="negative"
              source="Só Notícias"
              date="22/10/2023"
              content="Candidato a Prefeitura de Sinop é acusado de corrupção"
              url="https://www.sonoticias.com.br/politica/lucas-do-rio-verde-tera-novo-espaco-de-tradicoes-culturais-com-investimento-de-r-36-milhoes/"
            />
          </CardsContainer>

          <TitleBottomBar title="Menções em Destaque" />
          <CardsContainer>
            <NewsCard
              sentiment="positive"
              source="Só Notícias"
              date="22/10/2023"
              content="Candidato a Prefeitura de Sinop é acusado de corrupção"
              url="https://www.sonoticias.com.br/politica/lucas-do-rio-verde-tera-novo-espaco-de-tradicoes-culturais-com-investimento-de-r-36-milhoes/"
            />
            <NewsCard
              sentiment="neutral"
              source="Só Notícias"
              date="22/10/2023"
              content="Candidato a Prefeitura de Sinop é acusado de corrupção"
              url="https://www.sonoticias.com.br/politica/lucas-do-rio-verde-tera-novo-espaco-de-tradicoes-culturais-com-investimento-de-r-36-milhoes/"
            />
            <NewsCard
              sentiment="negative"
              source="Só Notícias"
              date="22/10/2023"
              content="Candidato a Prefeitura de Sinop é acusado de corrupção"
              url="https://www.sonoticias.com.br/politica/lucas-do-rio-verde-tera-novo-espaco-de-tradicoes-culturais-com-investimento-de-r-36-milhoes/"
            />
          </CardsContainer>
        </Main>
      </Content>
    </Container>
  );
}
