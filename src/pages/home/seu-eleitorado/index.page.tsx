import { Sidebar } from "@/components/Global/Sidebar";
import { HeaderComponent } from "@/components/home/Header";
import { SeuEleitoradoCards } from "@/components/home/seu-eleitorado/Cards";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {
  ChartContainer,
  ChartsContainer,
  Container,
  Content,
  Main,
} from "./styles";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { AgeGroupByGender } from "@/components/home/seu-eleitorado/AgeGroupByGender";

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
          <SeuEleitoradoCards />
          <ChartsContainer>
            <ChartContainer>
              <div>
                <TitleWithBar
                  content="Faixa etária da População por gênero"
                  barColor="#2F5CFC"
                />
              </div>
              <div
                style={{
                  height: "25rem",
                  width: "auto",
                  padding: "3rem 1rem 0 0",
                }}
              >
                <AgeGroupByGender />
              </div>
            </ChartContainer>
            <ChartContainer></ChartContainer>
          </ChartsContainer>
        </Main>
      </Content>
    </Container>
  );
}
