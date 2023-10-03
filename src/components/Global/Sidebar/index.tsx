import { LinkComponent } from "./Link";
import { SidebarContainer } from "./styles";

export function Sidebar() {
  return (
    <SidebarContainer>
      <div>
        <LinkComponent name="Empresas" imgSrc="/Google.svg" href="/" />
        <LinkComponent name="Login" imgSrc="/Google.svg" href="/login" />
      </div>
    </SidebarContainer>
  );
}
