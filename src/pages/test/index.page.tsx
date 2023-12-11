import { ScoreChart } from "@/components/home/ScoreChart";
import { Container, Needle, PageContainer } from "./styles";

export default function Test() {
  return (
    <PageContainer>
          <ScoreChart id="lsdkaasdj" score={Math.random() * 1000} />
          <ScoreChart id="123214214" score={Math.random() * 1000} />
    </PageContainer>
  );
}
