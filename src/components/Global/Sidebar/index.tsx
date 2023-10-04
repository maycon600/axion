import { LinkComponent } from "./Link";
import { AxionLogoContainer, SidebarContainer } from "./styles";

export function Sidebar() {
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
          gap: "1.5rem",
          marginTop: "3rem",
        }}
      >
        <LinkComponent name="Empresas" imgSrc="/sidebar/company.svg" href="/" />
        <LinkComponent
          name="Meu Perfil"
          imgSrc="/sidebar/profile.svg"
          href="/profile"
        />
        <LinkComponent
          name="Notificações"
          imgSrc="/sidebar/notification.svg"  
          href="/notifications"
        />
        <LinkComponent
          name="Financeiro"
          imgSrc="/sidebar/financial.svg"
          href="/financial"
        />
        <LinkComponent
          name="Usuários"
          imgSrc="/sidebar/users.svg"
          href="/users"
        />
        <LinkComponent
          name="Configurações"
          imgSrc="/sidebar/settings.svg"
          href="/settings"
        />
      </div>
    </SidebarContainer>
  );
}
