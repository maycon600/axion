import { useEffect, useState } from "react";
import { CardContainer } from "./styles";
import { useRouter } from "next/router";
import { NewsModal } from "../NewsModal";
import { MentionsModal } from "../MentionsModal";

interface Props {
  sentiment: "positive" | "neutral" | "negative";
  source: string;
  content: string;
  date: string;
}

export function MentionsCard({ sentiment, source, content, date }: Props) {
  const [color, setColor] = useState("");
  const [showNewsModal, setShowNewsModal] = useState(false);

  useEffect(() => {
    if (sentiment === "positive") {
      setColor("#22C24F");
    } else if (sentiment === "neutral") {
      setColor("#FFB043");
    } else {
      setColor("#E70000");
    }
  }, [sentiment]);

  return (
    <>
      <CardContainer onClick={() => setShowNewsModal(true)}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              paddingLeft: "0.5rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "0.5rem",
                width: "0.25rem",
                height: "2.75rem",
                borderRadius: "2px",
                backgroundColor: color,
              }}
            />
            <strong
              style={{
                fontSize: "1.125rem",
                lineHeight: 0.9,
                paddingTop: "0.5rem",
              }}
            >
              {source}
            </strong>
            <span
              style={{ fontSize: "0.7rem", color: "#4A4A4A", fontWeight: 600 }}
            >
              {date}
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <strong style={{ fontSize: "0.75rem", color: color }}>
              {sentiment === "positive"
                ? "Positiva"
                : sentiment === "neutral"
                ? "Neutra"
                : "Precisa de atenção"}
            </strong>
            <img
              src={
                sentiment === "positive"
                  ? "/dashboard/positive.svg"
                  : sentiment === "neutral"
                  ? "/dashboard/neutral.svg"
                  : "/dashboard/warning.svg"
              }
            />
          </div>
        </div>
        <div
          style={{
            marginTop: "1rem",
            padding: "0 0 0 0.5rem",
            fontSize: "1.5rem",
            lineHeight: "1.2",
          }}
        >
          <p style={{ margin: 0 }}>{content}</p>
        </div>
        <div
          style={{
            paddingTop: "0.6rem",
            color: "#626262",
            fontSize: "0.75rem",
          }}
        >
          <p
            style={{
              margin: "1rem 0 0",
              textAlign: "center",
              fontStyle: "italic",
              fontWeight: 500,
            }}
          >
            Clique para ser redirecionado para a notícia
          </p>
        </div>
      </CardContainer>
      <MentionsModal show={showNewsModal} onHide={() => setShowNewsModal(false)} />
    </>
  );
}
