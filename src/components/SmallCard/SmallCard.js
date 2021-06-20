import React, { useContext } from 'react';
import './SmallCard.css';
import ModalContext from '../Modal/ModalContext';

const SmallCard = ({ card, cardKey }) => {
  const { suit, value, isSelected } = card;
  const { onCardSelected, toggleModal } = useContext(ModalContext);
  return (
    <div
      className={`smallCard smallCard-${suit} ${isSelected && 'isSelected'}`}
      onClick={() => {
        if (isSelected) {
          return;
        }
        toggleModal(false, null);
        onCardSelected(cardKey);
      }}
    >
      <div className={`value`}>{value}</div>
      <div className={`${suit}`} />
    </div>
  );
};

export default SmallCard;
