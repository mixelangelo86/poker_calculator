import React from 'react';
import CardPosition from '../../CardPosition';
import Value from './Value';

const Player = ({ player }) => {
  const { firstCardIndex, secondCardIndex } = { ...player };
  return (
    <div className="player">
      <CardPosition positionIndex={firstCardIndex} />
      <CardPosition positionIndex={secondCardIndex} />
      <Value firstCardIndex={firstCardIndex} secondCardIndex={secondCardIndex} />
    </div>
  );
};

export default Player;
