import { LogoContainer, SubtitleContainer, TitleContainer } from "./styles";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
  barColor: string;
  width?: string;
  subTitle?: boolean;
}

export function TitleWithBar({ content, barColor, width="auto", subTitle = false, ...rest }: Props) {
  return (
    <TitleContainer barColor={barColor} width={width} {...rest}>
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
