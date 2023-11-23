import {
  CardBottomInfo,
  CardContainer,
  Container,
  Content,
  LocationCard,
  VerticalBar,
} from "./styles";

interface Props {
  contentTop: string;
  contentBottom: string;
  contentRight: string;
  barColor: string;
}

export function SeuEleitoradoCards() {
  return (
    <Container>
      <CardContainer>
        <VerticalBar barColor="#4A4A4A" />
        <Content>
          <p>Cidade:</p>
          <CardBottomInfo>
            <strong style={{ fontSize: "1.375rem" }}>Sinop-MT</strong>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: "1.2",
              }}
            >
              <strong
                style={{
                  fontSize: "1.125rem",
                }}
              >
                196 Mil
              </strong>
              <span style={{ fontSize: "0.75rem" }}>Habitantes</span>
            </div>
          </CardBottomInfo>
        </Content>
      </CardContainer>

      <CardContainer>
        <VerticalBar barColor="#7A2EB7" />
        <Content>
          <p>Verba Disponível:</p>
          <CardBottomInfo>
            <strong style={{ fontSize: "1.625rem" }}>196.000 Mil</strong>
          </CardBottomInfo>
        </Content>
      </CardContainer>
      <CardContainer>
        <VerticalBar barColor="#4553D3" />
        <Content>
          <p>Eleitores no Município:</p>
          <CardBottomInfo>
            <strong style={{ fontSize: "1.625rem" }}>106.987 Mil</strong>
          </CardBottomInfo>
        </Content>
      </CardContainer>
      <CardContainer>
        <VerticalBar barColor="#D38945" />
        <Content>
          <p>Concorrentes:</p>
          <CardBottomInfo>
            <div
              style={{ display: "flex", gap: "0.5rem", alignItems: "flex-end", marginTop: '0.3rem' }}
            >
              <strong style={{ fontSize: "2rem", lineHeight: "1.2" }}>
                29
              </strong>
              <span style={{ fontSize: "1.125rem", fontWeight: '600' }}>Prefeitos</span>
            </div>
          </CardBottomInfo>
        </Content>
      </CardContainer>
    </Container>
  );
}
