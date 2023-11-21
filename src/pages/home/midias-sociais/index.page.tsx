import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, LikesAndComentsContainer, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { VotersActive } from "@/components/home/Charts/VotersActive";
import { LineChartComponent } from "@/components/home/Charts/recharts/linechart";
import { BarChartComponent } from "@/components/home/Charts/recharts/verticalBarChart";
import { TotalQuotes } from "@/components/home/Charts/TotalQuotes";
import { LikesAndComentsCard } from "@/components/home/Charts/LikesCard";
import { DoughnutChart } from "@/components/home/Charts/DoughnutChart";

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
          <div style={{ width: "100%", height: "25rem" }}>
            <VotersActive />
          </div>
          <LineChartComponent />
          <div style={{ width: "100%", height: "25rem" }}>
            <BarChartComponent />
          </div>
        </Main>
      </Content>
    </Container>
  );
}
