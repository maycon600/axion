import { Sidebar } from "@/components/Global/Sidebar";
import { Container, Content, Main } from "./styles";
import { useRouter } from "next/router";
import { HeaderComponent } from "@/components/home/Header";
import { useEffect } from "react";
import { DoughnutChart } from "@/components/home/Charts/DoughnutChart";
import { VotersActive } from "@/components/home/Charts/VotersActive";
import { LineChartComponent } from "@/components/home/Charts/recharts/linechart";
import { BarChartComponent } from "@/components/home/Charts/recharts/verticalBarChart";

export default function SeuEleitorado() {
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home/seu-eleitorado");
    }
  }, []);
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          {/* <h1>osdajsaddsadsadsadassdadassdadas</h1> */}
          
        </Main>
      </Content>
    </Container>
  );
}
