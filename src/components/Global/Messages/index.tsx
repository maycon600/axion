import { useEffect, useState } from "react";
import { ArrowLeftSVG } from "../../../../public/messages/arrow-left";
import { ArrowRightSVG } from "../../../../public/messages/arrow-right";
import { Arrows, Author, Container } from "./styles";
import { motion, useAnimation } from "framer-motion";

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

  const control = useAnimation();

  function handleNext() {
    control.start({ opacity: [0], transition: { duration: 0.5 } });

    setTimeout(() => {
      control.start({ opacity: [1], transition: { duration: 1 } });
      if (step === messages.length - 1) {
        return setStep(0);
      }
      setStep((state) => state + 1);
    }, 300);
  }

  function handlePrevious() {
    control.start({ opacity: [0], transition: { duration: 0.5 } });
    setTimeout(() => {
      control.start({ opacity: [1], transition: { duration: 0.5 } });
      if (step === 0) {
        return setStep(messages.length - 1);
      }
      setStep((state) => state - 1);
    }, 300);
  }

  return (
    <div>
      <Container>
        <motion.div initial={{ opacity: 1 }} animate={control}>
          <p>{messages[step].message}</p>
        </motion.div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <motion.div initial={{ opacity: 1 }} animate={control}>
            <Author>
              <strong>{messages[step].author}</strong>
              <span>{messages[step].company}</span>
            </Author>
          </motion.div>
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
