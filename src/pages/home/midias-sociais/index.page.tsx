import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { VotersActive } from "@/components/home/Charts/VotersActive";
import { LineChartComponent } from "@/components/home/Charts/recharts/linechart";
import { BarChartComponent } from "@/components/home/Charts/recharts/verticalBarChart";

export default function MidiasSociais() {
  const router = useRouter();
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
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
