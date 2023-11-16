import { Dashboard } from "../../../../public/sidebar/dashboard";
import { FinancialSVG } from "../../../../public/sidebar/financial";
import { NotificationSVG } from "../../../../public/sidebar/notification";
import { ProfileSVG } from "../../../../public/sidebar/profile";
import { SettingsSVG } from "../../../../public/sidebar/settings";
import { UsersSVG } from "../../../../public/sidebar/users";
import { LinkComponent } from "./Link";
import {
  AxionLogoContainer,
  SidebarContainer
} from "./styles";

export function Sidebar() {
  // const isHeightAbove991 = useWindowDimensions();

  return (
    <SidebarContainer>
      <AxionLogoContainer>
        <img
          src="/sidebar/axion-white.svg"
          alt=""
          style={{ width: "11rem", margin: "3rem auto 0" }}
        />
      </AxionLogoContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2vh",
          marginTop: "3rem",
          paddingLeft: "2rem",
          paddingBottom: "5rem",
        }}
      >
        <LinkComponent name="Dashboard" imgSrc={<Dashboard />} href="/home" />
        <LinkComponent
          name="Meu Perfil"
          imgSrc={<ProfileSVG />}
          href="/profile"
        />
        <LinkComponent
          name="Notificações"
          imgSrc={<NotificationSVG />}
          href="/notifications"
        />
        <LinkComponent
          name="Financeiro"
          imgSrc={<FinancialSVG />}
          href="/financial"
        />
        <LinkComponent name="Usuários" imgSrc={<UsersSVG />} href="/users" />
        <LinkComponent
          name="Configurações"
          imgSrc={<SettingsSVG />}
          href="/settings"
        />
      </div>
    </SidebarContainer>
  );
}
