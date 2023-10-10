import { Sidebar } from "@/components/Global/Sidebar";
import { Container } from "../profile/styles";
import { Content, Header } from "./styles";
import { NotificationSVG } from "../../../public/sidebar/notification";
import Theme from "@/styles/themes";
import { HeaderComponent } from "@/components/Global/Header";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Content>
        <HeaderComponent />
      </Content>
    </Container>
  );
}
