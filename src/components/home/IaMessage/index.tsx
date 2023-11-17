import { IaMessageContainer, MessageHeader } from "./styles";

export function IaMessage() {
  return (
    <IaMessageContainer>
      <MessageHeader>
        <img src="/sidebar/axion-white.svg" alt="" />
        <div
          style={{
            padding: "0.2rem",
            borderRadius: "10px",
            background: "linear-gradient(109deg, #D8D8D8 0%, #0D123C 96.63%)",
          }}
        >
          <img src="/ia.png" alt="" />
        </div>
      </MessageHeader>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
        commodi necessitatibus voluptas nisi iste eos hic magnam, delectus magni
        adipisci sint repudiandae culpa animi voluptatem vitae repellat natus
        ipsa veritatis.
      </div>
    </IaMessageContainer>
  );
}
