import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { ChartContainer, ChartsContainer, Tip } from "./styles";
import { PostEngagement } from "../PostEngagement";
import { ScoreChart } from "../../ScoreChart";
import { VotersActive } from "../VotersActive";

export function SocialMidiaPage() {
  return (
    <ChartsContainer>
      <ChartContainer>
        <TitleWithBar
          content="Engajamento de Publicações"
          barColor="#12A9E7"
          className="mb-4"
        />
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
          className="mb-5"
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
      <ChartContainer>
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
