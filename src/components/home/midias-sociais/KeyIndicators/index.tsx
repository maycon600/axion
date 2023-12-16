import { KeyIndicator } from "../KeyIndicator";
import { KeyIndicatorContent, KeyIndicatorsContainer } from "./styles";

export function KeyIndicators() {
  const keyIndicatorsData = [
    { name: "Likes", previousValue: 12000, currentValue: 9000 },
    { name: "Comentários", previousValue: 2000, currentValue: 5000 },
    { name: "Sentimento Médio", previousValue: 2000, currentValue: 15000 },
    { name: "Compartilhamentos", previousValue: 7000, currentValue: 14000 },
  ];

  return (
    <KeyIndicatorsContainer>
      {keyIndicatorsData.map((indicator, index) => (
        <>
          <div>
            <KeyIndicatorContent>
              <strong style={{ fontWeight: 400, fontSize: "1.1rem" }}>
                {indicator.name}
              </strong>
              <KeyIndicator
                key={index}
                previousValue={indicator.previousValue}
                currentValue={indicator.currentValue}
              />
            </KeyIndicatorContent>
          </div>
          <div
            style={{
              width: "100%",
              borderTop: "1px solid #C8C8C8",
              margin: "0 auto",
            }}
          />
        </>
      ))}
    </KeyIndicatorsContainer>
  );
}
