import { Container, Needle, PageContainer } from "./styles";

export default function Test() {
  return (
    <PageContainer>
      <Container>
        <Needle>
          <div className="point" />
          <div className="noPoint" />
        </Needle>
      </Container>
    </PageContainer>
  );
}
