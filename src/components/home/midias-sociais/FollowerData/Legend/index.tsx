import { Container } from "./styles";

interface Props {
  name: string;
  count: number;
  circleColor: string;
}

export function FollowerDataLegend({ name, count, circleColor }: Props) {
  return (
    <Container circleColor={circleColor}>
      <div className="verticalBar" />
      <div className="content">
        <div className="name">
          <div className="circle" />
          <span>{name}</span>
        </div>
        <strong>{count}</strong>
      </div>
    </Container>
  );
}
