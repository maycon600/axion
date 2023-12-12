import Image from "next/image";
import { useState } from "react";
import { ChartTipContainer, Message } from "./styles";

interface Props {
  content: string;
}

export function ChartTip({ content }: Props) {
  const [showTip, setShowTip] = useState(false);
  return (
    <ChartTipContainer>
      <Image
        width={36}
        height={36}
        src={"/dashboard/midias-sociais/chartHoverTip.svg"}
        alt=""
        onMouseEnter={() => setShowTip(true)}
        onMouseLeave={() => setShowTip(false)}
      />
      <Message show={showTip}>
        {content}
        <div className="arrow" />
      </Message>
    </ChartTipContainer>
  );
}
