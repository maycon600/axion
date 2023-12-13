import {
  Content,
  Footer,
  Header,
  Main,
  ModalContainer,
  NewContent,
  NewNameAndSentiment,
  ScoreChartContainer,
} from "./styles";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import Image from "next/image";
import { ScoreChart } from "../../ScoreChart";

interface Props {
  show: boolean;
  onHide: () => void;
}

export function NewsModal({ show, onHide }: Props) {
  return (
    <ModalContainer show={show} onHide={onHide} size="lg">
      <Content>
        <Header>
          <div>
            <TitleWithBar content="Só Notícias" barColor="#22C24F" />
            <span
              style={{
                marginLeft: "1rem",
                fontSize: "0.875rem",
                color: "#4A4A4A",
                fontWeight: 600,
              }}
            >
              02/10/2023
            </span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}
          >
            <strong style={{ fontSize: "1.25rem", color: "#22C24F" }}>
              Positiva{" "}
            </strong>
            <Image
              width={36}
              height={36}
              src="/dashboard/positive.svg"
              alt=""
            />
          </div>
        </Header>
        <Main>
          <NewNameAndSentiment>
            <h1 style={{ fontSize: "2.25rem", textAlign: "center" }}>
              Redline Redline Redline Redline
            </h1>
            <hr />
            <ScoreChartContainer>
              <span>Sentimento da Redline</span>
              <div style={{ maxWidth: "14rem", margin: "auto" }}>
                <ScoreChart score={690} id="newScore" />
              </div>
            </ScoreChartContainer>

            <hr style={{ margin: "2rem 0" }} />
          </NewNameAndSentiment>
          <NewContent>
            my text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an my text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an my text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an...
          </NewContent>
        </Main>

        <Footer>
          <button>Ver notícia completa</button>
        </Footer>
      </Content>
    </ModalContainer>
  );
}
