import Image from "next/image";
import {
  CommentContainer,
  CommentContent,
  CommentDate,
  CommentFeedback,
  CommentScore,
  FeedbackContainer,
  NameAndContent,
} from "./styles";
import { MessageSVG } from "../../../../../public/dashboard/midias-sociais/messageSVG";
import { HeartSVG } from "../../../../../public/dashboard/midias-sociais/heartSVG";
import { windowWidth } from "@/utils/windowWidth";

interface Props {
  type: "instagram" | "facebook" | "youtube" | "tiktok";
  likes: number;
  comments: number;
  commentScore: number;
}

export function CommentComponent({
  type,
  likes,
  comments,
  commentScore,
}: Props) {
  function formatNumber(number: number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return number;
    }
  }

  return (
    <CommentContainer type={type}>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Image
            width={50}
            height={50}
            src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg"
            alt=""
            className="rounded-5"
          />
          {windowWidth(768) && (
            <strong style={{ fontSize: "0.925rem" }}>Nome</strong>
          )}
        </div>
      </div>
      <CommentContent>
        <NameAndContent>
          {!windowWidth(768) && <strong>Nome</strong>}
          <p>my text of the printing and typesetting industry.</p>
        </NameAndContent>
        <CommentFeedback type={type}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
            {type === "facebook" && (
              <CommentFeedback>
                <FeedbackContainer>
                  <Image
                    width={24}
                    height={24}
                    src="/dashboard/midias-sociais/facebookLike.png"
                    alt=""
                  />
                  <strong style={{ color: "#0037C1", fontSize: "0.75rem" }}>
                    {formatNumber(likes)}
                  </strong>
                </FeedbackContainer>
                <FeedbackContainer
                  style={{
                    display: "flex",
                    gap: "0.4rem",
                    alignItems: "center",
                  }}
                >
                  <Image
                    width={18}
                    height={18}
                    src="/dashboard/midias-sociais/facebookComment.png"
                    alt=""
                  />
                  <strong style={{ color: "#0037C1", fontSize: "0.75rem" }}>
                    {formatNumber(comments)}
                  </strong>
                </FeedbackContainer>
              </CommentFeedback>
            )}
            {type !== "facebook" && (
              <CommentFeedback>
                <FeedbackContainer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <HeartSVG
                    color={type === "instagram" ? "#EB4956" : "#292D32"}
                    size="small"
                  />
                  <strong
                    style={{
                      color: type === "instagram" ? "#EB4956" : "#292D32",
                      fontSize: "0.85rem",
                    }}
                  >
                    {formatNumber(likes)}
                  </strong>
                </FeedbackContainer>

                <FeedbackContainer
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                  }}
                >
                  <MessageSVG
                    color={type === "instagram" ? "#EB4956" : "#292D32"}
                    size="small"
                  />
                  <strong
                    style={{
                      color: type === "instagram" ? "#EB4956" : "#292D32",
                      fontSize: "0.85rem",
                    }}
                  >
                    {formatNumber(comments)}
                  </strong>
                </FeedbackContainer>
              </CommentFeedback>
            )}

            <CommentScore score={commentScore}>
              <div className="bar" />
            </CommentScore>
          </div>
          {type !== "facebook" && (
            <CommentDate>
              <span>23/10/2023 - 16:42</span>
            </CommentDate>
          )}
        </CommentFeedback>
      </CommentContent>
    </CommentContainer>
  );
}
