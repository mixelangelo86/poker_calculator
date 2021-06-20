import React, { useContext } from 'react';
import Deck from '../Deck';
import './modal.css';
import ModalContext from './ModalContext';

const Modal = () => {
  const { isModalOpen, deck } = useContext(ModalContext);

  return (
    <div className={`modal ${isModalOpen ? 'modalIsOpen' : 'modalIsClosed'}`}>
      <div className={`modalContent ${isModalOpen ? 'modalIsOpen' : 'modalIsClosed'}`}>
        <div className="modalHeader"> Select a Card</div>
        {isModalOpen && <Deck deck={deck} />}
      </div>
    </div>
  );
};

export default Modal;
