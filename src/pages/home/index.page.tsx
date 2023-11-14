import { HeaderComponent } from "@/components/Global/Header";
import { Sidebar } from "@/components/Global/Sidebar";
import { LineChartComponent } from "@/components/dashboard/recharts/linechart";
import BarChartComponent from "@/components/dashboard/recharts/verticalBarChart";
import { Container } from "../profile/styles";
import { Content, Main } from "./styles";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <header>
            <h2>Dashboard</h2>
            {/* <button>Trocar Senha</button> */}
          </header>

          {/* <div style={{ display: "flex", gap: "1rem" }}>
            <LikesCard
              name="Facebook"
              barColor="#3b5998"
              likes={100}
              dislikes={50}
            />

            <TotalQuotes
              barColor="#0000ff"
              totalQuotes={1000}
              initialDate="01/01/2022"
              finalDate="31/12/2022"
              popularityVariation={10}
            />
          </div>

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
          </div> */}

          <LineChartComponent />

          <BarChartComponent />
        </Main>
      </Content>
    </Container>
  );
}
