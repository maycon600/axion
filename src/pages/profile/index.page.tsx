import { Sidebar } from "@/components/Global/Sidebar";
import { Container } from "./styles";

export default function Profile() {
  return (
    <Container>
      <Sidebar />
      <main>
        <h1>Profile</h1>
      </main>
    </Container>
  );
}
