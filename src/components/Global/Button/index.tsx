import styled from "styled-components";
import { Container } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
  padding?: string;
}

export function GlobalButton({ content, ...props }: ButtonProps) {
  return(
    <Container {...props}>
      {content}
    </Container>
  )
}