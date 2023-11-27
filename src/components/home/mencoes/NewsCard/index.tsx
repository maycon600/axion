import { useEffect, useState } from "react";
import { CardContainer } from "./styles";

interface Props {
  sentiment: "positive" | "neutral" | "negative";
  source: string;
  content: string;
  date: string;
}

export function NewsCard({ sentiment, source, content, date }: Props) {
  const [color, setColor] = useState("");

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
    <CardContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "0.25rem",
              height: "2.75rem",
              backgroundColor: color,
            }}
          />
          <strong style={{ fontSize: "1.125rem", lineHeight: 0.9 }}>
            {source}
          </strong>
          <span
            style={{ fontSize: "0.7rem", color: "#4A4A4A", fontWeight: 600 }}
          >
            {date}
          </span>
        </div>
        <div>
          <strong style={{ color: color }}>
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
    </CardContainer>
  );
}
