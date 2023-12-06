import { ChartBar, ChartContainer, Container, Legend } from "./styles";

export function SmallBarChart() {
  return (
    <Container>
      <ChartContainer>
        <ChartBar height="60%" color="#22C24F" />
        <ChartBar height="40%" color="#FFE14D" />
        <ChartBar height="100%" color="#C22222" />
        <div
          style={{
            width: "120%",
            height: "1px",
            backgroundColor: "#606060",
            position: "absolute",
            bottom: "0",
            left: "0",
          }}
        />
        <div
          style={{
            width: "1px",
            height: "120%",
            backgroundColor: "#606060",
            position: "absolute",
            left: "0",
          }}
        />
      </ChartContainer>
      <div>
        <Legend color="#22C24F">
          <div className="circle" />
          <span>0 - 350: Ruim</span>
        </Legend>
        <Legend color="#FFE14D">
          <div className="circle" />
          <span>350 - 650: Regular</span>
        </Legend>
        <Legend color="#C22222">
          <div className="circle" />
          <span>650 - 1000: Muito Bom</span>
        </Legend>
      </div>
    </Container>
  );
}
