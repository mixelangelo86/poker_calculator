import React, { useState } from 'react';

const useModal = initializedDeck => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deck, setDeck] = useState(initializedDeck);
  const [callee, setCallee] = useState(initializedDeck);
  const [selectedPositions, setSelectedPositions] = useState([]);

  const overridePreviousCard = () => {
    const index = deck.findIndex(item => item.position === callee);
    if (index === -1) {
      return;
    }
    deck[index].isSelected = false;
    deck[index].position = null;
  };

  const onCardSelected = cardIndex => {
    overridePreviousCard();
    deck[cardIndex].isSelected = true;
    deck[cardIndex].position = callee;
    setDeck(deck);
  };

  const toggleModal = (isOpen, index) => {
    setIsModalOpen(isOpen);
    setCallee(index);
  };

  return { isModalOpen, deck, toggleModal, onCardSelected, selectedPositions };
};

export default useModal;
