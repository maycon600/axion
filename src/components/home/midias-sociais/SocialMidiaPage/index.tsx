import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { ChartContainer, ChartsContainer } from "./styles";
import { PostEngagement } from "../PostEngagement";
import { ScoreChart } from "../../ScoreChart";

export function SocialMidiaPage() {
  return (
    <ChartsContainer>
      <ChartContainer>
        <TitleWithBar content="Engajamento de Publicações" barColor="#12A9E7" />
        <PostEngagement />
      </ChartContainer>

      {/* SCORE */}

      <ChartContainer>
        <TitleWithBar
          content="Sentimento Médio dos Comentários:"
          barColor="#2F5CFC"
          subTitle
          width="27rem"
        />
        <div
          style={{
            marginTop: "3rem",
            height: "100px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ScoreChart score={750} />
        </div>
        <div
          style={{
            width: "90%",
            borderTop: "1px solid #000000",
            margin: "0 auto",
          }}
        />
      </ChartContainer>
    </ChartsContainer>
  );
}
