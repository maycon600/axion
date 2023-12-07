import Image from "next/image";
import { PostContainer } from "./styles";

interface Props {
  type: "instagram" | "facebook" | "youtube" | "tiktok";
}

export function PostComponent({ type }: Props) {
  return(
    <PostContainer>
      <Image width={80} height={80} src="/dashboard/midias-sociais/facebookLogo.png" alt={""} />
    </PostContainer>
  )
}