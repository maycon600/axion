import { TitleContainer } from "./styles";

interface Props {
  content: string;
  barColor: string;
}

export function TitleWithBar({ content, barColor }: Props) {
  return (
    <TitleContainer barColor={barColor}>
      <div className="bar" />
      <h2>{content}</h2>
    </TitleContainer>
  );
}
