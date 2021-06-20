import React, { useState } from 'react';
import Title from '../Title';
import Player from './components/Player';
import './players.css';
import AddPlayerButton from './components/AddPlayerButton';
import RemovePlayerButton from './components/RemovePlayerButton';

const Players = () => {
  const [seatedPlayersNumber, setSeatedPlayersNumber] = useState(1);

  const handleOnPlayerAdded = () => {
    setSeatedPlayersNumber(seatedPlayersNumber + 1);
  };

  const handleOnPlayerRemoved = () => {
    setSeatedPlayersNumber(seatedPlayersNumber - 1);
  };

  const players = [];
  for (let i = 0; i < seatedPlayersNumber; i++) {
    players.push(<Player playerIndex={i} />);
  }
  return (
    <div className="players">
      <Title text={'Players'} />
      {players}
      <AddPlayerButton onPlayerAdded={handleOnPlayerAdded} />
      <RemovePlayerButton onPlayerRemoved={handleOnPlayerRemoved} />
    </div>
  );
};

export default Players;
