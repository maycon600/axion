import { TitleContainer } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function TitleBottomBar({ title, ...rest }: Props) {
  return (
    <TitleContainer {...rest}>
      <h2>{title}</h2>
      <div className="bottom-bar" />
    </TitleContainer>
  );
}
