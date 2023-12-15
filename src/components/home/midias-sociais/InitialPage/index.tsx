import { TitleWithBar } from "@/components/Global/TitleWithBar";
import Image from "next/image";
import { EngagmentChart } from "../EngagementData";
import { FollowerData } from "../FollowerData";
import { FollowerDataLegend } from "../FollowerData/Legend";
import { SimpleWordcloud } from "../WordCloud";
import {
  ChartCenterInfo,
  ChartContainer,
  ChartsContainer,
  EngagmentLegendContainer,
  FollowerDataLegendContainer,
  KeyIndicatorContent,
  KeyIndicatorsContainer,
} from "./styles";
import { KeyIndicator } from "../KeyIndicator";
import { ChartTip } from "../ChartTip";

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
      color: "#2F5CFC",
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
      color: "#29282C",
      imgSrc: "/dashboard/tiktokIcon.svg",
    },
  ];

  const keyIndicatorsData = [
    { name: "Likes", previousValue: 12000, currentValue: 9000 },
    { name: "Comentários", previousValue: 2000, currentValue: 5000 },
    { name: "Sentimento Médio", previousValue: 2000, currentValue: 15000 },
    { name: "Compartilhamentos", previousValue: 7000, currentValue: 14000 },
  ];

  return (
    <ChartsContainer>
      {/* Score */}

      {/* <ChartContainer>
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
      </ChartContainer> */}

      <ChartContainer>
        <TitleWithBar
          content="Dados de Engajamento"
          barColor="#12A9E7"
          subTitle
        />
        <ChartTip content="my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a..." />
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
                <EngagmentLegendContainer circleColor={item.color}>
                  <div className="circle" />
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
                </EngagmentLegendContainer>
              );
            })}
          </div>
        </div>
      </ChartContainer>

      <ChartContainer>
        <TitleWithBar
          barColor="#080E45"
          content="Nuvem de palavras Geral"
          subTitle
          className="mb-3"
        />
        <ChartTip content="my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a..." />
        <SimpleWordcloud />
        {/* <Example width={500} height={300} /> */}
      </ChartContainer>

      <ChartContainer>
        <TitleWithBar
          content="Indicadores Chave:"
          barColor="#12A9E7"
          width="27rem"
        />
        <ChartTip content="my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a..." />
        <KeyIndicatorsContainer>
          {keyIndicatorsData.map((indicator, index) => (
            <div>
              <KeyIndicatorContent>
                <strong style={{ fontWeight: 400, fontSize: "1.1rem" }}>
                  {indicator.name}
                </strong>
                <KeyIndicator
                  key={index}
                  previousValue={indicator.previousValue}
                  currentValue={indicator.currentValue}
                />
              </KeyIndicatorContent>
              <div
                style={{
                  width: "100%",
                  borderTop: "1px solid #C8C8C8",
                  margin: "0 auto",
                }}
              />
            </div>
          ))}
        </KeyIndicatorsContainer>
      </ChartContainer>
    </ChartsContainer>
  );
}
