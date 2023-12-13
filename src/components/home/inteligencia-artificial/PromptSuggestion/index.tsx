import Image from "next/image";
import { SuggestionContainer } from "./styles";

interface Props {
  content: string;
  imgSrc: string;
  tipContent: string;
}

export function PrompSuggestion({ content, imgSrc, tipContent }: Props) {
  return (
    <SuggestionContainer>
      <Image width={30} height={30} src={imgSrc} alt="" />
      <strong>{content}</strong>
      <Image
        id="hover"
        width={24}
        height={24}
        src={"/dashboard/midias-sociais/chartHoverTip.svg"}
        alt=""
        style={{
          position: "absolute",
          top: "0.5rem",
          right: "0.5rem",
        }}
      />
    </SuggestionContainer>
  );
}
