import { useEffect, useState } from "react";
import { ArrowLeftSVG } from "../../../../public/messages/arrow-left";
import { ArrowRightSVG } from "../../../../public/messages/arrow-right";
import { Arrows, Author, Container } from "./styles";

export function Messages() {
  const messages = [
    {
      message:
        "“Usar a plataforma da Axion revolucionou a forma como lidamos com nossos casos e processo, é incrivel ter todos os dados de uma empresa centralizado em um único local.”",
      author: "Carlos Alberto",
      company: "M2S Advocacia",
    },
    {
      message: "“Mensagem 2.”",
      author: "Rodrigo",
      company: "M2S Advocacia",
    },
    {
      message: "“Mensagem 3",
      author: "Jorge",
      company: "M2S Advocacia",
    },
  ];

  const [step, setStep] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  console.log(fadeIn);

  function handleNext() {
    if (step === messages.length - 1) {
      setFadeIn(true);
      return setStep(0);
    }
    setStep((state) => state + 1);
    return setFadeIn(true);
  }

  function handlePrevious() {
    if (step === 0) {
      setFadeIn(true);
      return setStep(messages.length - 1);
    }
    setStep((state) => state - 1);
    return setFadeIn(true);
  }

  useEffect(() => {
    setFadeIn(false)
  }, [step]);

  return (
    <div>
      <Container>
        <p>{messages[step].message}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Author fadeIn={fadeIn}>
            <strong>{messages[step].author}</strong>
            <span>{messages[step].company}</span>
          </Author>
          <Arrows>
            <div onClick={handlePrevious}>
              <ArrowLeftSVG />
            </div>
            <div onClick={handleNext}>
              <ArrowRightSVG />
            </div>
          </Arrows>
        </div>
      </Container>
    </div>
  );
}
