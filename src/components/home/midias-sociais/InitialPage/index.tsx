import { TitleWithBar } from "@/components/Global/TitleWithBar";
import {
  ChartCenterInfo,
  ChartContainer,
  ChartsContainer,
  FollowerDataLegendContainer,
  Tip,
} from "./styles";
import { PostEngagement } from "../PostEngagement";
import { ScoreChart } from "../../ScoreChart";
import { EngagmentChart } from "../EngagementData";
import { SimpleWordcloud } from "../WordCloud";
import { VotersActive } from "../VotersActive";
import { FollowerDataLegend } from "../FollowerData/Legend";
import { FollowerData } from "../FollowerData";

export function InitialPage() {
  const followerData = [
    { name: "Instagram", count: 40000 },
    { name: "Facebook", count: 30000 },
    { name: "Youtube", count: 20000 },
    { name: "Tiktok", count: 10000 },
  ];

  const colors = ["#2F5CFC", "#0A2BA0", "#000411", "#E5E8F0"];

  const sortedFollowerData = followerData.sort((a, b) => b.count - a.count);

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
        <TitleWithBar content="Dados de Engajamento" barColor="#12A9E7" />
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
            Se quiser ter um maior alcance nas Redes Sociais se atente a estes
            horários.
          </p>
        </Tip>
      </ChartContainer>
    </ChartsContainer>
  );
}
