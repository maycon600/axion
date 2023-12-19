import Image from "next/image";
import {
  FeedbackContainer,
  PostContainer,
  PostContent,
  PostDate,
  PostFeedback,
} from "./styles";
import { HeartSVG } from "../../../../../public/dashboard/midias-sociais/heartSVG";
import { MessageSVG } from "../../../../../public/dashboard/midias-sociais/messageSVG";
import { ViewSVG } from "../../../../../public/dashboard/midias-sociais/viewSVG";
import { windowWidth } from "@/utils/windowWidth";

interface Props {
  type: "instagram" | "facebook" | "youtube" | "tiktok";
  likes: number;
  comments: number;
  feedbacks: number;
}

export function PostComponent({ type, likes, comments, feedbacks }: Props) {
  function formatNumber(number: number) {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + "k";
    } else {
      return number;
    }
  }

  return (
    <PostContainer type={type}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          width={80}
          height={80}
          src={
            type === "facebook"
              ? "/dashboard/midias-sociais/facebookLogo.png"
              : type === "instagram"
              ? "/dashboard/midias-sociais/instagramLogo.png"
              : type === "youtube"
              ? "/dashboard/midias-sociais/youtubeLogo.png"
              : "/dashboard/midias-sociais/tiktokLogo.png"
          }
          alt={""}
          className="logo"
        />
        {windowWidth(768) && <PostDate>02/12/2023 - 16:32</PostDate>}
      </div>
      <PostContent>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          illo sint voluptates fuga aut est debitis enim, eligendi perferendis
          minus consequatur saepe asperiores corporis officia, impedit
          reiciendis nihil non quam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Molestiae magnam explicabo accusantium eligendi?
          Obcaecati voluptatibus alias tempora qui laudantium consequuntur,
          saepe sequi at minima blanditiis quas vitae, itaque ad culpa!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {type === "facebook" && (
            <PostFeedback>
              <FeedbackContainer>
                <Image
                  width={30}
                  height={30}
                  src="/dashboard/midias-sociais/facebookLike.png"
                  alt=""
                />
                <strong style={{ color: "#0037C1", fontSize: "0.85rem" }}>
                  {formatNumber(likes)}
                </strong>
              </FeedbackContainer>
              <FeedbackContainer
                style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}
              >
                <Image
                  width={20}
                  height={20}
                  src="/dashboard/midias-sociais/facebookComment.png"
                  alt=""
                />
                <strong style={{ color: "#0037C1", fontSize: "0.85rem" }}>
                  {formatNumber(comments)}
                </strong>
              </FeedbackContainer>
              <FeedbackContainer
                style={{ display: "flex", gap: "0.4rem", alignItems: "center" }}
              >
                <Image
                  width={20}
                  height={20}
                  src="/dashboard/midias-sociais/facebookShare.png"
                  alt=""
                />
                <strong style={{ color: "#0037C1", fontSize: "0.85rem" }}>
                  {formatNumber(feedbacks)}
                </strong>
              </FeedbackContainer>
            </PostFeedback>
          )}
          {type !== "facebook" && (
            <PostFeedback>
              <FeedbackContainer
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <HeartSVG
                  color={type === "instagram" ? "#EB4956" : "#292D32"}
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
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <MessageSVG
                  color={type === "instagram" ? "#EB4956" : "#292D32"}
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
              <FeedbackContainer
                style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}
              >
                <ViewSVG color={type === "instagram" ? "#EB4956" : "#292D32"} />
                <strong
                  style={{
                    color: type === "instagram" ? "#EB4956" : "#292D32",
                    fontSize: "0.85rem",
                  }}
                >
                  {formatNumber(feedbacks)}
                </strong>
              </FeedbackContainer>
            </PostFeedback>
          )}
          {!windowWidth(768) && <PostDate>02/12/2023 - 16:32</PostDate>}
        </div>
      </PostContent>
    </PostContainer>
  );
}
