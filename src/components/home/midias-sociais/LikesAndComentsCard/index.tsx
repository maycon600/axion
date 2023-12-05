import Theme from "@/styles/themes";
import { Container, Feedback, FeedbackGroup } from "./styles";

interface LikesCardProps extends React.HTMLAttributes<HTMLDivElement> {

  name: string;
  likes: number;
  coments: number;
  barColor: string;
  isSelected: boolean;
}

export function LikesAndComentsCard({
  name,
  likes,
  coments,
  barColor,
  isSelected,
  ...rest
}: LikesCardProps) {
  return (
    <Container barColor={barColor} isSelected={isSelected} {...rest}>
      <div className="verticalBar" />
      <header>{name}</header>
      <Feedback>
        <FeedbackGroup>
          <div className="group">
            <img src="/dashboard/like.svg" alt="" />
            <strong>{likes}K</strong>
          </div>
          <span>Likes em publicações</span>
        </FeedbackGroup>

        <FeedbackGroup>
          <div className="group">
            <img src="/dashboard/coments.svg" alt="" />
            <strong>{coments}K</strong>
          </div>
          <span>Comentários</span>
        </FeedbackGroup>
      </Feedback>

      <div style={{ margin: "1.3rem 0 0.5rem" }}>
        <p style={{ color: Theme.color.gray_70, fontSize: "0.625rem" }}>
          <img src="/dashboard/downArrow.svg" alt="" />
          <span style={{ color: Theme.color.red_70 }}>-10%</span> de queda desde
          o mês passado
        </p>
      </div>
    </Container>
  );
}
