import { useRouter } from "next/router";
import {
  HeaderContainer,
  HeaderMenu,
  HeaderTop,
  Instruction,
  MenuItem,
  UserMenu,
} from "./styles";
import { MenuItemComponent } from "./MenuItem";

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
          name="MÍDIA SOCIAL"
        />
        <MenuItemComponent
          imgSrc="/dashboard/suas-noticias-menu.png"
          href="/suas-noticias"
          name="SUAS NOTÍCIAS"
        />
        <MenuItemComponent
          imgSrc="/dashboard/inteligencia-artificial-menu.png"
          href="/inteligencia-artificial"
          name="INTELIGENCIA ARTIFICIAL"
        />
        {/* <MenuItem active={router.pathname.split("/")[2] === "seu-eleitorado"}>
          <strong className="title">SEU ELEITORADO</strong>
          <img src="/dashboard/seu-eleitorado-menu.png" alt="" />
        </MenuItem>
        <MenuItem active={router.pathname.split("/")[2] === "midias-sociais"}>
          <img src="/dashboard/midias-sociais-menu.png" alt="" />
        </MenuItem>
        <MenuItem active={router.pathname.split("/")[2] === "suas-noticias"}>
          <img src="/dashboard/suas-noticias-menu.png" alt="" />
        </MenuItem>
        <MenuItem
          active={router.pathname.split("/")[2] === "inteligencia-artificial"}
        >
          <img src="/dashboard/inteligencia-artificial-menu.png" alt="" />
        </MenuItem> */}
      </HeaderMenu>
    </HeaderContainer>
  );
}
