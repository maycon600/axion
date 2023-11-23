import { UserMessageContainer } from "./styles";

interface Props {
  content: string;
}

export function UserMessage({ content }: Props) {
  return (
    <UserMessageContainer>
      <div>{content}</div>
    </UserMessageContainer>
  );
}
