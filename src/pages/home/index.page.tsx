import { HeaderComponent } from "@/components/Global/Header";
import { Sidebar } from "@/components/Global/Sidebar";
import { AreaChart } from "@/components/dashboard/LineChart";
import { Container } from "../profile/styles";
import { Content, Main } from "./styles";
import { PieChart } from "@/components/dashboard/PieChart";
import { VerticalBarChart } from "@/components/dashboard/VerticalBarChart";
import { HorizontalBarChart } from "@/components/dashboard/HorizontalBarChart";
import { MultipleLineChart } from "@/components/dashboard/MultipleLineChart";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <header>
            <h2>Meu Perfil</h2>
            <button>Trocar Senha</button>
          </header>

          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ width: "500px", height: "auto" }}>
              <AreaChart />
            </div>
            <div style={{ width: "500px", height: "auto" }}>
              <PieChart />
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ width: "500px", height: "auto" }}>
              <VerticalBarChart />
            </div>
            <div style={{ width: "500px", height: "auto" }}>
              <HorizontalBarChart />
            </div>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ width: "500px", height: "auto" }}>
              <MultipleLineChart />
            </div>
          </div>
        </Main>
      </Content>
    </Container>
  );
}
