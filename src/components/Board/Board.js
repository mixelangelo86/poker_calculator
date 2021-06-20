import React from 'react';
import Players from '../Players';
import CommunitySection from '../Community/Community';
import ModalProvider from '../Modal/ModalProvider';
import Modal from '../Modal';
import '../../index.css';

const Board = () => {
  return (
    <ModalProvider>
      <Players />
      <CommunitySection />
      <Modal />
    </ModalProvider>
  );
};

export default Board;
