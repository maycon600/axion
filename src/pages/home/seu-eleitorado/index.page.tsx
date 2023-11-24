import { Sidebar } from "@/components/Global/Sidebar";
import { HeaderComponent } from "@/components/home/Header";
import { SeuEleitoradoCards } from "@/components/home/seu-eleitorado/Cards";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  AgeGroupLegend,
  ChartContainer,
  ChartsContainer,
  Container,
  Content,
  Main,
} from "./styles";
import { TitleWithBar } from "@/components/Global/TitleWithBar";
import { AgeGroupByGender } from "@/components/home/seu-eleitorado/AgeGroupByGender";
import { VotersInfo } from "@/components/home/seu-eleitorado/VoterInfo";
import { VotersInfoSelect } from "@/components/home/seu-eleitorado/VoterInfo/VotersInfoSelect";

export default function SeuEleitorado() {
  const router = useRouter();

  const [selectedVoterOption, setSelectedVoterOption] = useState("education");

  const selectVotersValue = ["education", "gender", "age"];

  useEffect(() => {
    if (router.pathname === "/") {
      router.push("/home/seu-eleitorado");
    }
  }, []);

  const groupGenderData = [
    {
      name: "16-18",
      Homens: 590,
      Mulheres: 800,
    },
    {
      name: "19-29",
      Homens: 868,
      Mulheres: 967,
    },
    {
      name: "30-40",
      Homens: 1397,
      Mulheres: 1098,
    },
    {
      name: "41-50",
      Homens: 1480,
      Mulheres: 1200,
    },
    {
      name: "51-60",
      Homens: 1520,
      Mulheres: 1108,
    },
    {
      name: "61-70",
      Homens: 1400,
      Mulheres: 680,
    },
    {
      name: "+70",
      Homens: 250,
      Mulheres: 500,
    },
  ];

  const total = {
    homens: groupGenderData.reduce((acc, curr) => acc + curr.Homens, 0),
    mulheres: groupGenderData.reduce((acc, curr) => acc + curr.Mulheres, 0),
  };

  const groupGenderConf = [
    {
      dataKey: "Homens",
      color: "#22C24F",
      total: total.homens,
    },
    {
      dataKey: "Mulheres",
      color: "#E73F3F",
      total: total.mulheres,
    },
  ];

  const votersInfoData = {
    education: [100, 100, 100, 100, 100, 100, 100],
    gender: [100, 250],
    age: [100, 100, 100, 100, 100, 100, 100],
  };

  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
        <Main>
          <SeuEleitoradoCards />
          <ChartsContainer>
            <ChartContainer>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TitleWithBar
                  content="Faixa etária da População por gênero"
                  barColor="#2F5CFC"
                  width={"16rem"}
                />
                <AgeGroupLegend>
                  {groupGenderConf.map((item) => {
                    return (
                      <div style={{ display: "flex", flexDirection: "column" }}>
                        <div
                          key={item.dataKey}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          <div
                            style={{
                              width: "0.625rem",
                              height: "0.625rem",
                              borderRadius: "50%",
                              backgroundColor: item.color,
                            }}
                          />
                          <strong style={{ lineHeight: 1 }}>
                            {item.total}
                          </strong>
                        </div>
                        <span
                          style={{ fontSize: "0.625rem", color: "#8790AB" }}
                        >
                          {item.dataKey}
                        </span>
                      </div>
                    );
                  })}
                </AgeGroupLegend>
              </div>
              <div
                style={{
                  height: "25rem",
                  width: "auto",
                  padding: "3rem 1rem 0 0",
                }}
              >
                <AgeGroupByGender
                  data={groupGenderData}
                  conf={groupGenderConf}
                />
              </div>
            </ChartContainer>
            <ChartContainer>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <TitleWithBar
                  barColor="#2F5CFC"
                  content={
                    selectedVoterOption === "education"
                      ? "Escolaridade dos Eleitores"
                      : "Idade dos Eleitores"
                  }
                />
                <VotersInfoSelect
                  selectedValue={selectedVoterOption}
                  setSelectedValue={setSelectedVoterOption}
                  values={selectVotersValue}
                />
              </div>
              <VotersInfo chartData={votersInfoData.gender} />
            </ChartContainer>
          </ChartsContainer>
        </Main>
      </Content>
    </Container>
  );
}
