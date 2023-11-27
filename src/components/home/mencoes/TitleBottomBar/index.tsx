import { TitleContainer } from "./styles";

interface Props {
  title: string
}

export function TitleBottomBar({ title }: Props) {
  return(
    <TitleContainer>
      <h2>{title}</h2>
      <div className="bottom-bar" />
    </TitleContainer>
  )
}