import React from 'react';

const RemovePlayer = ({ onPlayerRemoved, seatedPlayers }) => {
  return (
    <div className={`button ${seatedPlayers < 2 && 'disabled'} `} onClick={onPlayerRemoved}>
      Remove Player
    </div>
  );
};

export default RemovePlayer;
