import { LinkComponent } from "./Link";
import { SidebarContainer } from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '5rem' }}>
        <LinkComponent name="Empresas" imgSrc="/sidebar/company.svg" href="/" />
        <LinkComponent name="Meu Perfil" imgSrc="/sidebar/profile.svg" href="/profile" />
      </div>
    </SidebarContainer>
  );
}
