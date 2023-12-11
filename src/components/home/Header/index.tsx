import { useRouter } from "next/router";
import { MenuItemComponent } from "./MenuItem";
import {
  Candidate,
  CandidateInfo,
  HeaderContainer,
  HeaderMenu,
  HeaderTop,
  Instruction,
  Options,
  UserMenu,
  VerifyCompetition,
  VerifyPopularity,
} from "./styles";
import Image from "next/image";
import { HeaderSelect } from "./Select";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";

interface headerProps {
  fadeOut: any;
}

export function HeaderComponent({ fadeOut }: headerProps) {
  const router = useRouter();

  const [selectedValue, setSelectedValue] = useState("Últimos 15 Dias");
  const values = ["Últimos 7 Dias", "Últimos 15 Dias", "Últimos 30 Dias"];

  const [comparison1, setComparison1] = useState("Últimos 7 Dias");

  return (
    <HeaderContainer>
      <HeaderTop>
        <Instruction>
          <img src="/dashboard/click.svg" alt="" />
          Clique nos <em>Cards</em> para ver os dados do seu Candidato
        </Instruction>
        <UserMenu>
          <img src="/dashboard/user.png" alt="" className="user" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>Robert Martins</strong>
            <span>contato@robertmartins.com.br</span>
          </div>
          <img src="/arrow-down.svg" alt="" className="arrow" />
        </UserMenu>
      </HeaderTop>
      <HeaderMenu>
        <MenuItemComponent
          fadeOut={() => fadeOut()}
          imgSrc="/dashboard/seu-eleitorado-menu.png"
          href="/seu-eleitorado"
          name="SEU ELEITORADO"
        />
        <MenuItemComponent
          fadeOut={() => fadeOut()}
          imgSrc="/dashboard/midias-sociais-menu.png"
          href="/midias-sociais"
          name="MÍDIAS SOCIAIS"
        />
        <MenuItemComponent
          fadeOut={() => fadeOut()}
          imgSrc="/dashboard/suas-noticias-menu.png"
          href="/mencoes"
          name="MENÇÕES"
        />
        <MenuItemComponent
          fadeOut={() => fadeOut()}
          imgSrc="/dashboard/inteligencia-artificial-menu.png"
          href="/inteligencia-artificial"
          name="INTELIGENCIA ARTIFICIAL"
        />
      </HeaderMenu>
      <Candidate>
        <CandidateInfo>
          <Image
            src={"/dashboard/candidate.png"}
            width={200}
            height={200}
            alt=""
          />
          <div className="info">
            <strong>Roberto Dorner</strong>
            <span className="candidateNumber">
              Número do Candidato: xxxxxxxxxx
            </span>
            <span className="status">
              <div className="statusCircle" />
              Participando da Eleição
            </span>
          </div>
        </CandidateInfo>
        
        <HeaderSelect
          values={values}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue} 
        />
      </Candidate>
    </HeaderContainer>
  );
}
