import React from 'react';
import Players from '../Players';
import Community from '../Community/Community';
import ModalProvider from '../Modal/ModalProvider';
import Modal from '../Modal';

const Table = () => {
  return (
    <div className="table">
      <ModalProvider>
        <Community />
        <Players />
        <Modal />
      </ModalProvider>
    </div>
  );
};

export default Table;
