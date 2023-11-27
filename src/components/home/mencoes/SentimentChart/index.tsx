import { TitleWithBar } from "@/components/Global/TitleWithBar";
import {
  ChartContainer,
  LegendContainer,
  Negative,
  Neutral,
  Positive,
  SentimentContainer,
} from "./styles";
import { useEffect, useState } from "react";
import { formatNumberWithDot } from "@/utils/numberFormat";

interface Props {
  positive: number;
  neutral: number;
  negative: number;
}

export function SentimentChart({ positive, neutral, negative }: Props) {
  const [total, setTotal] = useState(0);
  const [positivePercent, setPositivePercent] = useState("");
  const [neutralPercent, setNeutralPercent] = useState("");
  const [negativePercent, setNegativePercent] = useState("");

  useEffect(() => {
    setTotal(positive + neutral + negative);
    setPositivePercent(((positive / total) * 100).toString() + "%");
    setNeutralPercent(((neutral / total) * 100).toString() + "%");
    setNegativePercent(((negative / total) * 100).toString() + "%");
  }, [total, positive, neutral, negative]);

  return (
    <SentimentContainer>
      <TitleWithBar content="Sentimentos" barColor="#FC792F" />

      <ChartContainer>
        {total ? (
          <>
            <Positive percent={positivePercent} />
            <Negative percent={negativePercent} />
            <Neutral percent={neutralPercent} />
          </>
        ) : (
          <Positive percent="100%" />
        )}
      </ChartContainer>

      <div
        style={{
          display: "flex",
          gap: "3.25rem",
          marginTop: "1.5rem",
          marginLeft: "1rem",
        }}
      >
        <LegendContainer>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
          >
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "#22C24F",
                borderRadius: "50%",
              }}
            />
            <strong>{formatNumberWithDot(positive)}</strong>
          </div>
          <span style={{ fontSize: "0.8rem", color: "#8790AB" }}>
            Positivos
          </span>
        </LegendContainer>
        <LegendContainer>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
          >
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "#EA2020",
                borderRadius: "50%",
              }}
            />
            <strong>{formatNumberWithDot(negative)}</strong>
          </div>
          <span style={{ fontSize: "0.8rem", color: "#8790AB" }}>
            Negativos
          </span>
        </LegendContainer>
        <LegendContainer>
          <div
            style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}
          >
            <div
              style={{
                width: "0.75rem",
                height: "0.75rem",
                backgroundColor: "#FFB043",
                borderRadius: "50%",
              }}
            />
            <strong>{formatNumberWithDot(neutral)}</strong>
          </div>
          <span style={{ fontSize: "0.8rem", color: "#8790AB" }}>Neutros</span>
        </LegendContainer>
      </div>
    </SentimentContainer>
  );
}
