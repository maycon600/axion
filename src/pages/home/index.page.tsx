import { Sidebar } from "@/components/Global/Sidebar";
import { Container } from "../profile/styles";
import { Header, Main } from "./styles";
import { NotificationSVG } from "../../../public/sidebar/notification";
import Theme from "@/styles/themes";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Header>
          <strong>Seja bem-vindo, Robert</strong>
          <span style={{ color: Theme.color.gray_80 }}>
            <NotificationSVG />
          </span>
        </Header>
      </Main>
    </Container>
  );
}
