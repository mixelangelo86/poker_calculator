import React from 'react';
import { getCardGrid } from './utils';
import './card.css';

const Card = ({ suit, value }) => {
  const card = [];
  const cardGrid = getCardGrid(suit, value);
  cardGrid.map((gridItem, index) => {
    const { suit, rotated, value } = gridItem;
    return card.push(
      <div className={`grid-item ${suit} ${rotated}`} key={index}>
        {value}
      </div>,
    );
  });

  return <div className={`card ${suit}`}>{card}</div>;
};

export default Card;
