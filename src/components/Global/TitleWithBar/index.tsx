import { LogoContainer, SubtitleContainer, TitleContainer } from "./styles";

interface Props {
  content: string;
  barColor: string;
  width?: string;
  subTitle?: boolean;
}

export function TitleWithBar({ content, barColor, width="auto", subTitle = false }: Props) {
  return (
    <TitleContainer barColor={barColor} width={width}>
      <div className="bar" />
      <div className="content">
        <h2>{content}</h2>
        {subTitle && (
          <SubtitleContainer>
            <span>Feito pela Inteligência Artificial</span>
            <LogoContainer>
              <img src="/axionLogo.png" alt="" className="logoAxion" />
              <div className="iaContainer">
                <img src="/ia.png" alt="" />
              </div>
            </LogoContainer>
          </SubtitleContainer>
        )}
      </div>
    </TitleContainer>
  );
}
