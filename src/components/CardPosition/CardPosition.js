import React, { useContext } from 'react';
import ModalContext from '../Modal/ModalContext';
import Card from '../Card';
import { checkIsCardSelected } from './utils';
import './cardPosition.css';

const CardPosition = ({ position }) => {
  const { toggleModal, deck } = useContext(ModalContext);
  const card = checkIsCardSelected(deck, position);
  const cardPosition = card ? (
    <Card suit={card.suit} value={card.value} />
  ) : (
    <div className="cross" />
  );

  return (
    <>
      <div
        className="cardPosition"
        onClick={() => {
          toggleModal(true, position);
        }}
      >
        {cardPosition}
      </div>
    </>
  );
};

export default CardPosition;
