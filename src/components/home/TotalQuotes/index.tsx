import Theme from "@/styles/themes";
import { Container, Quotes } from "./styles";

interface TotalQuotesProps {
  barColor: string;
  totalQuotes: number;
  initialDate: string;
  finalDate: string;
  popularityVariation: number;
}

export function TotalQuotes({
  barColor,
  totalQuotes,
  initialDate,
  finalDate,
  popularityVariation,
}: TotalQuotesProps) {
  return (
    <Container barColor={barColor}>
      <div className="verticalBar" />
      <header>Citações totais</header>
      <Quotes>{totalQuotes}</Quotes>

      <div></div>

      <div style={{ margin: "1.3rem 0 0.5rem" }}>
        <p style={{ color: Theme.color.gray_70 }}>
          {initialDate} - {finalDate}
        </p>
        <p style={{ color: Theme.color.gray_70 }}>
          <img src="/dashboard/downArrow.svg" alt="" />
          <span style={{ color: Theme.color.red_70 }}>-10%</span> de queda desde
          o mês passado
        </p>
      </div>
    </Container>
  );
}
