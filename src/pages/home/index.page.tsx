import { Sidebar } from "@/components/Global/Sidebar";
import { Container } from "../profile/styles";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <main style={{height: '150vh'}}>
        <h1>Home</h1>
      </main>
    </Container>
  );
}
