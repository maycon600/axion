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

export function HeaderComponent() {
  const router = useRouter();

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
          imgSrc="/dashboard/seu-eleitorado-menu.png"
          href="/seu-eleitorado"
          name="SEU ELEITORADO"
        />
        <MenuItemComponent
          imgSrc="/dashboard/midias-sociais-menu.png"
          href="/midias-sociais"
          name="MÍDIAS SOCIAIS"
        />
        <MenuItemComponent
          imgSrc="/dashboard/suas-noticias-menu.png"
          href="/suas-noticias"
          name="MENÇÕES"
        />
        <MenuItemComponent
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
        <Options>
          <VerifyPopularity>
            <img src="/dashboard/like-blue.svg" alt="" /> Verificar Popularidade
            Estimada
          </VerifyPopularity>
          <VerifyCompetition>
            <img src="/dashboard/competitors.svg" alt="" /> Analisar
            Concorrentes
          </VerifyCompetition>
        </Options>
      </Candidate>
    </HeaderContainer>
  );
}
