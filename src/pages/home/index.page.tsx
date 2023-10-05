import { Sidebar } from "@/components/Global/Sidebar";
import { Container } from "../profile/styles";
import { NotificationSVG } from "../../../public/sidebar/notification";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <main style={{ height: "150vh", background: 'gray' }}>
        <header>
          <strong>Seja bem-vindo, Robert</strong>
          <span style={{ color: 'red'}}>
            <NotificationSVG />
          </span>
        </header>
      </main>
    </Container>
  );
}
