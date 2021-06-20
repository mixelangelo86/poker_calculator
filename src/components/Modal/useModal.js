import { useState } from 'react';

const useModal = initializedDeck => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deck, setDeck] = useState(initializedDeck);
  const [openBy, setOpenedBy] = useState(initializedDeck);
  const [selectedCard, setSelectedCard] = useState(initializedDeck);

  const onCardSelected = cardIndex => {
    deck[cardIndex].isSelected = true;
    deck[cardIndex].cardPositionIndex = openBy;
    setSelectedCard(deck[cardIndex]);
    return deck[cardIndex];
  };

  const toggleModal = (isOpen, index) => {
    setIsModalOpen(isOpen);
    setOpenedBy(index);
  };

  return { isModalOpen, deck, toggleModal, onCardSelected, selectedCard };
};

export default useModal;
