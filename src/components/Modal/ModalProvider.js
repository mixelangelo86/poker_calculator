import React from 'react';
import ModalContext from './ModalContext';
import useModal from './useModal';
import { createDeck } from '../JS/logic';

const ModalProvider = ({ children }) => {
  const { Provider } = ModalContext;
  const { isModalOpen, deck, toggleModal, onCardSelected, selectedPositions } = useModal(createDeck());

  return (
    <Provider value={{ isModalOpen, deck, toggleModal, onCardSelected, selectedPositions }}>
      {children}
    </Provider>
  );
};

export default ModalProvider;
