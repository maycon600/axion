import React, { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

export function SimpleWordcloud() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const words = [
    {
      text: "FRAUDE",
      value: 100,
    },
    {
      text: "PROPAGANDA ENGANOSA",
      value: 100,
    },
    {
      text: "RUIM",
      value: 100,
    },
    {
      text: "DEMORA NA ENTREGA",
      value: 150,
    },
    {
      text: "PRODUTO COM DEFEITO",
      value: 150,
    },
    {
      text: "CUMPRE O QUE PROMETE",
      value: 150,
    },
    {
      text: "BOM ATENDIMENTO",
      value: 200,
    },
    {
      text: "FRAUDE",
      value: 200,
    },
    {
      text: "PROPAGANDA ENGANOSA",
      value: 200,
    },
    {
      text: "RUIM",
      value: 220,
    },
    {
      text: "DEMORA NA ENTREGA",
      value: 220,
    },
    {
      text: "PRODUTO COM DEFEITO",
      value: 220,
    },
    {
      text: "CUMPRE O QUE PROMETE",
      value: 220,
    },
  ];

  const options = {
    rotations: 0,
    colors: ["#556AFB", "#33429A", "#0A27E6"],
    fontWeight: "700",
    fontFamily: "Impact",
    fontSizes: [20, 50],
  };

  return (
    <div>{client && <ReactWordcloud words={words} options={options} />}</div>
  );
}
