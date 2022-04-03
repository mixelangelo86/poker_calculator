import React, { useContext } from 'react';
import Deck from '../Deck';
import ModalContext from './ModalContext';
import './modal.css';

const Modal = () => {
  const { isModalOpen, toggleModal, deck } = useContext(ModalContext);

  return (
    <div
      className={`modal ${isModalOpen ? 'modalIsOpen' : 'modalIsClosed'}`}
      onClick={() => {
        toggleModal(false);
      }}
    >
      <div className="modalHeader">Select a Card</div>
      {isModalOpen && <Deck deck={deck} />}
    </div>
  );
};

export default Modal;
