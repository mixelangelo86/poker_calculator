import React from 'react';
import {
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Jack,
  Queen,
  King,
  Ace,
} from './components';
import './card.css';

const Card = ({ suit, value }) => {
  const Cards = {
    2: Two,
    3: Three,
    4: Four,
    5: Five,
    6: Six,
    7: Seven,
    8: Eight,
    9: Nine,
    10: Ten,
    J: Jack,
    Q: Queen,
    K: King,
    A: Ace,
  };
  const CardValue = Cards[value];
  return (
    <div className="cards">
      <div className={`card ${suit} `} value={value}>
        <CardValue suit={suit} />
      </div>
    </div>
  );
};

export default Card;
