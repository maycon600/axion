import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { Container } from "./styles";

export function TotalQuotes() {
  return (
    <Container>
      <TitleWithBar content="Citações Totais" barColor="#8FC96A" />
      <div style={{ marginLeft: "1.1rem", fontSize: "2.75rem" }}>
        <strong>340.120</strong>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          padding: "0 0.5rem",
        }}
      >
        <span style={{ fontSize: "0.75rem", color: "#8790AB" }}>
          01/04/2022-30/09/2022
        </span>
        <span style={{ fontSize: "0.7rem", color: "#8790AB" }}>
          <img src="/dashboard/arrow-up.svg" alt="" />
          <em style={{ color: "#22C24F", fontStyle: "normal" }}>+6.5%</em> de
          aumento desde o mês passado
        </span>
      </div>
    </Container>
  );
}
