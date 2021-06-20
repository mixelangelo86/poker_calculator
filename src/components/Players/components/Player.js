import React from 'react';
import CardPosition from '../../CardPosition';
import AddPlayerButton from './AddPlayerButton';

const Player = ({ playerIndex, onPlayerAdded, handleOnPlayerRemoved }) => {
  return (
    <div className="player">
      <CardPosition card={[]} index={playerIndex * 2 + 1} />
      <CardPosition card={[]} index={playerIndex * 2 + 2} />
    </div>
  );
};

export default Player;
