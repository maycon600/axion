import { Sidebar } from "@/components/Global/Sidebar";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { FollowerData } from "@/components/home/Charts/FollowerData";
import { Legend } from "@/components/home/Charts/FollowerData/Legend";
import { LikesAndComentsCard } from "@/components/home/Charts/LikesCard";
import { EngagmentChart } from "@/components/home/Charts/PieChart";
import { VotersActive } from "@/components/home/Charts/VotersActive";
import { SimpleWordcloud } from "@/components/home/Charts/WordCloud";
import { HeaderComponent } from "@/components/home/Header";
import {
  ChartCenterInfo,
  ChartContainer,
  ChartsContainer,
  Container,
  Content,
  FollowerDataLegend,
  LikesAndComentsContainer,
  Main,
  Tip,
} from "./styles";

export default function MidiasSociais() {
  const followerData = [
    { name: "Instagram", count: 80 },
    { name: "Facebook", count: 30 },
    { name: "Youtube", count: 20 },
    { name: "Tiktok", count: 120 },
  ];

  const colors = ["#2F5CFC", "#0A2BA0", "#000411", "#E5E8F0"];

  const sortedFollowerData = followerData.sort((a, b) => b.count - a.count);

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

          <ChartsContainer>
            <ChartContainer>
              <TitleWithBar content="Dados de Seguidores" barColor="#080E45" />
              <div className="chartContent">
                <ChartCenterInfo>
                  <strong className="percentage">34%</strong>
                  <strong className="gain">
                    <img src="/dashboard/arrow-up.svg" alt="" /> +6.5%
                  </strong>
                  <span className="description">de ganho em processos</span>
                </ChartCenterInfo>
                <FollowerData data={followerData} />
                <FollowerDataLegend>
                  {sortedFollowerData.map((item, index) => (
                    <Legend
                      key={index}
                      name={item.name}
                      count={item.count}
                      circleColor={colors[index]}
                    />
                  ))}
                </FollowerDataLegend>
              </div>
            </ChartContainer>
            <ChartContainer>
              <TitleWithBar content="Dados de Engajamento" barColor="#12A9E7" />
              <div
                style={{ height: "100%", width: "auto", marginLeft: "4rem" }}
              >
                <EngagmentChart />
              </div>
            </ChartContainer>
            <ChartContainer
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <TitleWithBar
                barColor="#080E45"
                content="Nuvem de palavras Geral"
                subTitle
              />
              <SimpleWordcloud />
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
          </ChartsContainer>
        </Main>
      </Content>
    </Container>
  );
}
