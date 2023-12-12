import Image from "next/image";
import { useState } from "react";
import { ChartTipContainer, Message } from "./styles";

export function ChartTip() {
  const [showTip, setShowTip] = useState(false);
  // const renderTooltip = (props: any) => (
  //   <Tooltip id="tooltip" {...props}>
  //     <div style={{ backgroundColor: "red", width: '100%' }}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur porro error quis corrupti ut expedita deserunt ratione enim ipsum perspiciatis esse nesciunt voluptates, facilis rem maxime! Molestias, dolore! Modi, optio? </div>
  //   </Tooltip>
  // );

  return (
    <ChartTipContainer>
      {/* <OverlayTrigger
        placement="top-end"
        delay={{ show: 250, hide: 400 }}
        overlay={renderTooltip}
      >
      </OverlayTrigger> */}

        <Image
          width={36}
          height={36}
          src={"/dashboard/midias-sociais/chartHoverTip.svg"}
          alt=""
          onMouseEnter={() => setShowTip(true)}
          onMouseLeave={() => setShowTip(false)}
        />
      <Message show={showTip}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum esse
        pariatur accusantium voluptatibus veniam. 
        <div className="arrow"/>
      </Message>
    </ChartTipContainer>
  );
}
