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
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 11,
    },
    {
      text: 'thought',
      value: 16,
    },
    {
      text: 'bad',
      value: 17,
    },
    {
      text: 'happy',
      value: 22,
    },
    {
      text: 'great',
      value: 30,
    },
    {
      text: 'wonderful',
      value: 28,
    },
    {
      text: 'exciting',
      value: 25,
    },
    {
      text: 'amazing',
      value: 35,
    },
    // Add more words as needed
];


  const options = {
    rotations: 0,
  }

  return (
   <div>
    {client && (
      <ReactWordcloud words={words} options={options} />
    )}
   </div>
  );
}