import { Sidebar } from "@/components/Global/Sidebar";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { HeaderComponent } from "@/components/home/Header";
import { NewsCard } from "@/components/home/mencoes/NewsCard";
import { ScoreChart } from "@/components/home/mencoes/ScoreChart";
import { SentimentChart } from "@/components/home/mencoes/SentimentChart";
import { TitleBottomBar } from "@/components/home/mencoes/TitleBottomBar";
import { TotalQuotes } from "@/components/home/mencoes/TotalQuotes";
import { useRouter } from "next/router";
import {
  CardsContainer,
  Container,
  Content,
  Main,
  TopCardsContainer,
} from "./styles";

export default function SeuEleitorado() {
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <TopCardsContainer>
            <div
              style={{
                width: "17.25rem",
                height: "100%",
                backgroundColor: "white",
                padding: "1rem 1.25rem",
                borderRadius: 10,
              }}
            >
              <TitleWithBar content="Score Total" barColor="#D38945" />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "0 8%",
                }}
              >
                <ScoreChart score={152} />
              </div>
            </div>
            <TotalQuotes />

            <SentimentChart
              positive={343349}
              negative={243312}
              neutral={103231}
            />
          </TopCardsContainer>

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
