import { TitleWithBar } from "@/components/Global/TitleWithBar";
import {
  ChartCenterInfo,
  ChartContainer,
  ChartsContainer,
  FollowerDataLegendContainer,
  Tip,
} from "./styles";
import { EngagmentChart } from "../EngagementData";
import { SimpleWordcloud } from "../WordCloud";
import { VotersActive } from "../VotersActive";
import { FollowerDataLegend } from "../FollowerData/Legend";
import { FollowerData } from "../FollowerData";
import Image from "next/image";

export function InitialPage() {
  const followerData = [
    { name: "Instagram", count: 40000 },
    { name: "Facebook", count: 30000 },
    { name: "Youtube", count: 20000 },
    { name: "Tiktok", count: 10000 },
  ];

  const colors = ["#2F5CFC", "#0A2BA0", "#000411", "#E5E8F0"];

  const sortedFollowerData = followerData.sort((a, b) => b.count - a.count);

  const engagmentData = [
    {
      name: "Instagram",
      count: 40000,
      color: "#E7298A",
      imgSrc: "/dashboard/instagramIcon.png",
    },
    {
      name: "Facebook",
      count: 40000,
      color: "#29282C",
      imgSrc: "/dashboard/facebookIcon.png",
    },
    {
      name: "Youtube",
      count: 40000,
      color: "#E73F3F",
      imgSrc: "/dashboard/youtubeIcon.png",
    },
    {
      name: "Tiktok",
      count: 20000,
      color: "#2F5CFC",
      imgSrc: "/dashboard/tiktokIcon.svg",
    },
  ];

  return (
    <ChartsContainer>
      {/* Score */}

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
        <TitleWithBar content="Dados de Engajamento" barColor="#12A9E7" subTitle />
        <div
          style={{ display: "flex", marginTop: "3rem", alignItems: "center" }}
        >
          <div>
            <EngagmentChart chartData={engagmentData} />
          </div>
          <div
            style={{
              width: "auto",
              height: "auto",
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {engagmentData.map((item) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      width: "0.5rem",
                      height: "0.5rem",
                      borderRadius: "50%",
                      background: item.color,
                    }}
                  />
                  <strong
                    style={{
                      fontSize: "0.75rem",
                      width: "4rem",
                      fontWeight: 600,
                    }}
                  >
                    {item.name}
                  </strong>
                  <Image src={item.imgSrc} width={32} height={32} alt="" />
                </div>
              );
            })}
          </div>
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
            Se quiser ter um maior alcance nas Redes Sociais se atente a estes
            horários.
          </p>
        </Tip>
      </ChartContainer>
    </ChartsContainer>
  );
}
