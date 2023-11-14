import { Sidebar } from "@/components/Global/Sidebar";
import { Container } from "../profile/styles";
import { Content, Main } from "./styles";
import { LineChartComponent } from "@/components/home/Charts/recharts/linechart";
import { BarChartComponent } from "@/components/home/Charts/recharts/verticalBarChart";
import { HeaderComponent } from "@/components/home/Header";

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

          <div style={{ width: "100%", height: "25rem" }}>
            <BarChartComponent />
          </div>

          {/* <div style={{ width: "40rem", height: "10rem" }}>
            <TesteComponent />
          </div> */}
        </Main>
      </Content>
    </Container>
  );
}
