import Image from "next/image";
import { ChartTipContainer } from "./styles";

export function ChartTip() {
  return (
    <ChartTipContainer>
      <Image
        width={36}
        height={36}
        src={"/dashboard/midias-sociais/chartHoverTip.svg"}
        alt=""
      />
    </ChartTipContainer>
  );
}
