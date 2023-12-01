import { Sidebar } from "@/components/Global/Sidebar";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { HeaderComponent } from "@/components/home/Header";
import { EngagmentChart } from "@/components/home/midias-sociais/EngagementData";
import { FollowerData } from "@/components/home/midias-sociais/FollowerData";
import { LikesAndComentsCard } from "@/components/home/midias-sociais/LikesAndComentsCard";
import { VotersActive } from "@/components/home/midias-sociais/VotersActive";
import { SimpleWordcloud } from "@/components/home/midias-sociais/WordCloud";
import {
  ChartCenterInfo,
  ChartContainer,
  ChartsContainer,
  Content,
  FollowerDataLegendContainer,
  LikesAndComentsContainer,
  Main,
  Tip,
} from "./styles";
import { FollowerDataLegend } from "@/components/home/midias-sociais/FollowerData/Legend";
import RootLayout from "@/components/Layout";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react";
import { PostEngagement } from "@/components/home/midias-sociais/PostEngagement";
import { ScoreChart } from "@/components/home/mencoes/ScoreChart";

export default function MidiasSociais() {
  const followerData = [
    { name: "Instagram", count: 40000 },
    { name: "Facebook", count: 30000 },
    { name: "Youtube", count: 20000 },
    { name: "Tiktok", count: 10000 },
  ];

  const colors = ["#2F5CFC", "#0A2BA0", "#000411", "#E5E8F0"];

  const sortedFollowerData = followerData.sort((a, b) => b.count - a.count);

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
                <TitleWithBar
                  content="Dados de Seguidores"
                  barColor="#080E45"
                />
                <PostEngagement />
              </ChartContainer>

              {/* Score */}
              <ChartContainer style={{ height: "400px" }}>
                <TitleWithBar
                  content="Horário que os Eleitores estão mais Ativos em Sua Rede Social:"
                  barColor="#12A9E7"
                  subTitle
                  width="27rem"
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
                  {/* <ScoreChart score={690} /> */}
                </div>
              </ChartContainer>

              <ChartContainer>
                <TitleWithBar
                  content="Dados de Seguidores"
                  barColor="#080E45"
                />
                <div className="chartContent">
                  <ChartCenterInfo>
                    <strong className="percentage">34%</strong>
                    <strong className="gain">
                      <img src="/dashboard/arrow-up.svg" alt="" /> +6.5%
                    </strong>
                    <span className="description">de ganho em processos</span>
                  </ChartCenterInfo>
                  <FollowerData data={followerData} />
                  <FollowerDataLegendContainer>
                    {sortedFollowerData.map((item, index) => (
                      <FollowerDataLegend
                        key={index}
                        name={item.name}
                        count={item.count}
                        circleColor={colors[index]}
                      />
                    ))}
                  </FollowerDataLegendContainer>
                </div>
              </ChartContainer>
              <ChartContainer>
                <TitleWithBar
                  content="Dados de Engajamento"
                  barColor="#12A9E7"
                />
                <div
                  style={{
                    height: "100%",
                    width: "100%",
                    marginLeft: "1rem",
                  }}
                >
                  <EngagmentChart />
                </div>
              </ChartContainer>
              <ChartContainer
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <TitleWithBar
                  barColor="#080E45"
                  content="Nuvem de palavras Geral"
                  subTitle
                />
                <SimpleWordcloud />
                {/* <Example width={500} height={300} /> */}
              </ChartContainer>
              <ChartContainer style={{ height: "400px" }}>
                <TitleWithBar
                  content="Horário que os Eleitores estão mais Ativos em Sua Rede Social:"
                  barColor="#12A9E7"
                  subTitle
                  width="27rem"
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
      </RootLayout>
    </main>
  );
}
