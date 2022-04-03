import React, { useContext } from 'react';
import './SmallCard.css';
import ModalContext from '../Modal/ModalContext';

const SmallCard = ({ card, cardKey }) => {
  const { suit, value, isSelected } = card;
  const { onCardSelected, toggleModal } = useContext(ModalContext);
  const selected = isSelected ? 'isSelected' : '';
  return (
    <div
      className={`smallCard smallCard-${suit} ${selected}`}
      onClick={() => {
        if (isSelected) {
          return;
        }
        toggleModal(false, null);
        onCardSelected(cardKey);
      }}
    >
      <div className="smallCardValue">{value}</div>
      <div className={`${suit}`} />
    </div>
  );
};

export default SmallCard;
