import { TitleWithBar } from "@/components/Global/TitleWithBar";
import {
  ChartContainer,
  ChartsContainer,
  Comments,
  CommentsContainer,
  CommentsHeader,
  KeyIndicatorContent,
  KeyIndicatorsContainer,
  LabelAndSelect,
  PageContainer,
  PostEngagmentContainer,
  PostsAndComments,
  PostsContainer,
  PostsHeader,
  ScoreChartContainer,
  SeeMorePosts,
  Tip,
  VotersActiveContainer,
} from "./styles";
import { PostEngagement } from "../PostEngagement";
import { ScoreChart } from "../../ScoreChart";
import { VotersActive } from "../VotersActive";
import { SmallBarChart } from "../SmallBarChart";
import { KeyIndicator } from "../KeyIndicator";
import { VotersInfoSelect } from "@/components/home/seu-eleitorado/VotersInfoSelect";
import { useState } from "react";
import { OrderSelect } from "../OrderSelect";
import { PostComponent } from "../PostComponent";
import { CommentComponent } from "../ComentComponent";
import { ChartTip } from "../ChartTip";
import { KeyIndicators } from "../KeyIndicators";

interface Props {
  pageType: "instagram" | "facebook" | "youtube" | "tiktok";
}

export function SocialMidiaPage({ pageType }: Props) {
  const keyIndicatorsData = [
    { name: "Likes", previousValue: 12000, currentValue: 9000 },
    { name: "Comentários", previousValue: 12000, currentValue: 9000 },
    { name: "Sentimento Médio", previousValue: 12000, currentValue: 9000 },
    { name: "Compartilhamentos", previousValue: 12000, currentValue: 9000 },
  ];

  const [selectedValue, setSelectedValue] = useState("Relevância");
  const values = ["Relevância", "Mais recente"];

  const posts = [1, 2, 3];

  return (
    <PageContainer>
      <ChartsContainer>
        <PostEngagmentContainer>
          <TitleWithBar
            content="Engajamento de Publicações"
            barColor="#12A9E7"
            className="mb-4 title"
          />
          <PostEngagement />
        </PostEngagmentContainer>

        <ScoreChartContainer>
          <TitleWithBar
            content="Sentimento Médio dos Comentários:"
            barColor="#2F5CFC"
            subTitle
            className="title"
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
            <ScoreChart id="score" score={750} />
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
        </ScoreChartContainer>

        <KeyIndicatorsContainer>
          <TitleWithBar
            content="Indicadores Chave:"
            barColor="#12A9E7"
            subTitle
          />
          <ChartTip content="my text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when a..." />
          <KeyIndicators />
        </KeyIndicatorsContainer>

        <VotersActiveContainer>
          <TitleWithBar
            content="Horário que os Eleitores estão mais Ativos em Sua Rede Social:"
            barColor="#12A9E7"
            subTitle
          />
          <div className="chart">
            <VotersActive />
          </div>

          <Tip>
            <img src="/dashboard/userIcon.svg" alt="" />
            <p>
              Se quiser ter um maior alcance nas Redes Sociais se atente a estes
              horários.
            </p>
          </Tip>
        </VotersActiveContainer>
      </ChartsContainer>

      <PostsAndComments>
        <PostsContainer>
          <PostsHeader>
            <TitleWithBar content="Publicações" barColor="#12A9E7" />
            <LabelAndSelect>
              <strong
                onClick={() =>
                  document.getElementById("posts-order-select")?.focus()
                }
              >
                Ordenar por:
              </strong>
              <OrderSelect
                selectedValue={selectedValue}
                values={values}
                setSelectedValue={setSelectedValue}
                id="posts-order-select"
              />
            </LabelAndSelect>
          </PostsHeader>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "0 0.875rem",
            }}
          >
            {posts.map((post, index) => (
              <PostComponent
                type={pageType}
                likes={Math.floor(Math.random() * 5000)}
                comments={Math.floor(Math.random() * 5000)}
                feedbacks={Math.floor(Math.random() * 5000)}
              />
            ))}
          </div>
          <SeeMorePosts>
            <button>Ver mais</button>
          </SeeMorePosts>
        </PostsContainer>

        <CommentsContainer>
          <CommentsHeader>
            <TitleWithBar content="Publicações" barColor="#12A9E7" />
            <LabelAndSelect>
              <strong
                onClick={() =>
                  document.getElementById("posts-order-select")?.focus()
                }
              >
                Ordenar por:
              </strong>
              <OrderSelect
                selectedValue={selectedValue}
                values={values}
                setSelectedValue={setSelectedValue}
                id="posts-order-select"
              />
            </LabelAndSelect>
          </CommentsHeader>
          <Comments>
            <CommentComponent
              type={pageType}
              likes={Math.floor(Math.random() * 5000)}
              comments={Math.floor(Math.random() * 5000)}
              commentScore={700}
            />
            <CommentComponent
              type={pageType}
              likes={Math.floor(Math.random() * 5000)}
              comments={Math.floor(Math.random() * 5000)}
              commentScore={700}
            />
            <CommentComponent
              type={pageType}
              likes={Math.floor(Math.random() * 5000)}
              comments={Math.floor(Math.random() * 5000)}
              commentScore={700}
            />
            <CommentComponent
              type={pageType}
              likes={Math.floor(Math.random() * 5000)}
              comments={Math.floor(Math.random() * 5000)}
              commentScore={700}
            />
            <CommentComponent
              type={pageType}
              likes={Math.floor(Math.random() * 5000)}
              comments={Math.floor(Math.random() * 5000)}
              commentScore={700}
            />
          </Comments>
        </CommentsContainer>
      </PostsAndComments>
    </PageContainer>
  );
}
