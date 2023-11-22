import { Sidebar } from "@/components/Global/Sidebar";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { LikesAndComentsCard } from "@/components/home/Charts/LikesCard";
import { EngagmentChart } from "@/components/home/Charts/PieChart";
import { VotersActive } from "@/components/home/Charts/VotersActive";
import { LineChartComponent } from "@/components/home/Charts/recharts/linechart";
import { BarChartComponent } from "@/components/home/Charts/recharts/verticalBarChart";
import { HeaderComponent } from "@/components/home/Header";
import { useRouter } from "next/router";
import {
  ChartContainer,
  Container,
  Content,
  LikesAndComentsContainer,
  Main,
  Tip,
} from "./styles";
import { DoughnutChart } from "@/components/home/Charts/DoughnutChart";
import { FollowerData } from "@/components/home/Charts/FollowerData";
import ReactWordcloud from "react-wordcloud";
import { SimpleWordcloud } from "@/components/home/Charts/WordCloud";
import { useEffect, useState } from "react";

export default function MidiasSociais() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const words = [
    {
      text: "told",
      value: 64,
    },
    {
      text: "mistake",
      value: 11,
    },
    {
      text: "thought",
      value: 16,
    },
    {
      text: "bad",
      value: 17,
    },
  ];
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <h1>Redes Sociais</h1>
          <LikesAndComentsContainer>
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
          </LikesAndComentsContainer>

          {/* <DoughnutChart /> */}
          {/* <FollowerData /> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
              justifyItems: "center",
              alignItems: "center",
              gap: "3rem",
              marginTop: "1.2rem",
            }}
          >
            <ChartContainer>
              <TitleWithBar content="Dados de Engajamento" barColor="#12A9E7" />
              <div style={{ height: "100%", width: "400px" }}>
                <EngagmentChart />
              </div>
            </ChartContainer>
            <ChartContainer style={{ height: "400px" }}>
              <TitleWithBar
                content="Horário que os Eleitores estão mais Ativos em Sua Rede Social:"
                barColor="#12A9E7"
                subTitle
              />
              <div
                style={{
                  height: "300px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <VotersActive />
              </div>

              <Tip>
                <img src="/dashboard/userIcon.svg" alt="" />
                <p>
                  Se quiser ter um maior alcance nas Redes Sociais se atente a
                  estes horários.
                </p>
              </Tip>
            </ChartContainer>
            <ChartContainer>
              <SimpleWordcloud />
              {/* <LineChartComponent /> */}
            </ChartContainer>
            <ChartContainer>{/* <BarChartComponent /> */}</ChartContainer>
          </div>
        </Main>
      </Content>
    </Container>
  );
}
