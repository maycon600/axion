import { TitleWithBar } from "@/components/Global/TitleWithBar";
import {
  ChartContainer,
  ChartsContainer,
  KeyIndicatorContent,
  KeyIndicatorsContainer,
  PostsAndComments,
  Tip,
} from "./styles";
import { PostEngagement } from "../PostEngagement";
import { ScoreChart } from "../../ScoreChart";
import { VotersActive } from "../VotersActive";
import { SmallBarChart } from "../SmallBarChart";
import { KeyIndicator } from "../KeyIndicator";

interface Props {
  pageType: "instagram" | "facebook" | "youtube" | "tiktok";
}

export function SocialMidiaPage() {
  const keyIndicatorsData = [
    { name: "Likes", previousValue: 12000, currentValue: 9000 },
    { name: "Comentários", previousValue: 12000, currentValue: 9000 },
    { name: "Sentimento Médio", previousValue: 12000, currentValue: 9000 },
    { name: "Compartilhamentos", previousValue: 12000, currentValue: 9000 },
  ];

  return (
    <>
      <ChartsContainer>
        <ChartContainer>
          <TitleWithBar
            content="Engajamento de Publicações"
            barColor="#12A9E7"
            className="mb-4"
          />
          <PostEngagement />
        </ChartContainer>

        <ChartContainer>
          {/* SCORE */}
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
          <div className="p-5">
            <SmallBarChart />
          </div>
        </ChartContainer>

        <ChartContainer>
          <TitleWithBar
            content="Indicadores Chave:"
            barColor="#12A9E7"
            width="27rem"
          />
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
      
      <PostsAndComments>
        
      </PostsAndComments>
    </>
  );
}
