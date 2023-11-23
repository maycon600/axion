import { IaMessageContainer, MessageHeader } from "./styles";

interface Props {
  content: string;
}

export function IaMessage({ content }: Props) {
  return (
    <IaMessageContainer>
      <MessageHeader>
        <img src="/sidebar/axion-white.svg" alt="" />
        <div
          style={{
            width: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: "0.1rem",
            borderRadius: "4px",
            background: "linear-gradient(109deg, #D8D8D8 0%, #0D123C 96.63%)",
            height: '1.2rem'
          }}
        >
          <img src="/ia.png" alt="" style={{ width: "0.8rem" }} />
        </div>
      </MessageHeader>
      <div>
        {content}
      </div>
    </IaMessageContainer>
  );
}
