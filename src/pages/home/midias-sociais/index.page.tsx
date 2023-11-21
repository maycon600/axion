import { Sidebar } from "@/components/Global/Sidebar";
import { LikesAndComentsCard } from "@/components/home/Charts/LikesCard";
import { VotersActive } from "@/components/home/Charts/VotersActive";
import { LineChartComponent } from "@/components/home/Charts/recharts/linechart";
import { BarChartComponent } from "@/components/home/Charts/recharts/verticalBarChart";
import { HeaderComponent } from "@/components/home/Header";
import { useRouter } from "next/router";
import {
  ChartContainer,
  Container,
  Content,
  LikesAndComentsContainer,
  Main,
} from "./styles";
import { PieChart } from "@/components/home/Charts/PieChart";

export default function MidiasSociais() {
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <h1>Redes Sociais</h1>
          <LikesAndComentsContainer>
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
            <LikesAndComentsCard
              barColor="#5162FF"
              coments={1}
              likes={25}
              name="Facebook"
            />
          </LikesAndComentsContainer>

          {/* <DoughnutChart /> */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
              justifyItems: "center",
              alignItems: "center",
              gap: "3rem",
            }}
          >
            <ChartContainer style={{ height: "450px" }}>
              <PieChart />
            </ChartContainer>
            <ChartContainer>
              <VotersActive />
            </ChartContainer>
            <ChartContainer>
              <LineChartComponent />
            </ChartContainer>
            <ChartContainer>
              <BarChartComponent />
            </ChartContainer>
          </div>
        </Main>
      </Content>
    </Container>
  );
}
