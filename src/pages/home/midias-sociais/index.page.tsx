import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { VotersActive } from "@/components/home/Charts/VotersActive";
import { LineChartComponent } from "@/components/home/Charts/recharts/linechart";
import { BarChartComponent } from "@/components/home/Charts/recharts/verticalBarChart";
import { TotalQuotes } from "@/components/home/Charts/TotalQuotes";
import { LikesAndComentsCard } from "@/components/home/Charts/LikesCard";

export default function MidiasSociais() {
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <TotalQuotes
            barColor="red"
            finalDate="lkjads"
            initialDate="dsalksdlk"
            popularityVariation={10}
            totalQuotes={2000}
            key={Math.random()}
          />
          <LikesAndComentsCard
            barColor="green"
            coments={1000}
            likes={25000}
            name="Likes"
          />
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
