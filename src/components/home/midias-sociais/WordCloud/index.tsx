import React, { useEffect, useState } from 'react';
import ReactWordcloud from 'react-wordcloud';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';



export function SimpleWordcloud() {
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const words = [
    {
      text: 'FRAUDE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PROPAGANDA ENGANOSA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000), 
    },
    {
      text: 'RUIM',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'DEMORA NA ENTREGA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PRODUTO COM DEFEITO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'CUMPRE O QUE PROMETE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'BOM ATENDIMENTO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'FRAUDE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PROPAGANDA ENGANOSA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000), 
    },
    {
      text: 'RUIM',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'DEMORA NA ENTREGA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PRODUTO COM DEFEITO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'CUMPRE O QUE PROMETE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'BOM ATENDIMENTO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'FRAUDE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PROPAGANDA ENGANOSA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000), 
    },
    {
      text: 'RUIM',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'DEMORA NA ENTREGA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PRODUTO COM DEFEITO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'CUMPRE O QUE PROMETE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'BOM ATENDIMENTO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'FRAUDE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PROPAGANDA ENGANOSA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000), 
    },
    {
      text: 'RUIM',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'DEMORA NA ENTREGA',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'PRODUTO COM DEFEITO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'CUMPRE O QUE PROMETE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'BOM ATENDIMENTO',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    {
      text: 'FRAUDE',
      value: Math.round(Math.random() * (5000 - 1000) + 1000),
    },
    // Add more words as needed
];


  const options = {
    rotations: 0,
    colors: ['#556AFB', '#33429A', '#0A27E6', ],
    fontWeight: '700',
    fontFamily: 'Arial',
    fontSizes: [12, 50],
  }

  return (
   <div>
    {client && (
      <ReactWordcloud words={words} options={options} />
    )}
   </div>
  );
}