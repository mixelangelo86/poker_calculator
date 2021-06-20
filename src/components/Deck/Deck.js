import React from 'react';
import SmallCard from '../SmallCard';
import { getCardsPerSuit } from './utils';
import { suitValue } from './constants';

const Deck = ({ deck }) => {
  const cardsPerSuit = getCardsPerSuit(deck);
  let index = -1;
  const rowsPerSuit = Object.keys(cardsPerSuit).map(key => {
    const cards = cardsPerSuit[key].map(card => {
      index += 1;
      return <SmallCard card={card} cardKey={index} key={suitValue[key] * 13 + index} />;
    });

    return (
      <div className="row">
        <div className="cards">{cards}</div>
      </div>
    );
  });
  return <>{rowsPerSuit}</>;
};

export default Deck;
