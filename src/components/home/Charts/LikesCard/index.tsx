import Theme from "@/styles/themes";
import { Container, Feedback, FeedbackGroup } from "./styles";

interface LikesCardProps {
  name: string;
  likes: number;
  coments: number;
  barColor: string;
}

export function LikesAndComentsCard({
  name,
  likes,
  coments,
  barColor,
}: LikesCardProps) {
  return (
    <Container barColor={barColor}>
      <div className="verticalBar" />
      <header>{name}</header>
      <Feedback>
        <FeedbackGroup>
          <div className="group">
            <img src="/dashboard/like.svg" alt="" />
            <strong>{likes}</strong>
          </div>
          <span>Likes em publicações</span>
        </FeedbackGroup>

        <FeedbackGroup>
          <div className="group">
            <img src="/dashboard/coments.svg" alt="" />
            <strong>{coments}</strong>
          </div>
          <span>Comentários</span>
        </FeedbackGroup>
      </Feedback>

      <div style={{ margin: "1.3rem 0 0.5rem" }}>
        <p style={{ color: Theme.color.gray_70 }}>
          <img src="/dashboard/downArrow.svg" alt="" />
          <span style={{ color: Theme.color.red_70 }}>-10%</span> de queda desde
          o mês passado
        </p>
      </div>
    </Container>
  );
}
