import React, { useContext, useState } from 'react';
import Title from '../Title';
import Player from './components/Player';
import './players.css';
import AddPlayer from './components/AddPlayer';
import RemovePlayer from './components/RemovePlayer';
import ModalContext from '../Modal/ModalContext';

const Seats = ({ communityCards }) => {
  // const { deck } = useContext(ModalContext);

  // const [seatedPlayers, setSeatedPlayers] = useState(1);
  const [players, setPlayers] = useState([]);

  // const players = [];
  // for (const card of deck) {
  //   if (card.isSelected) {
  //     players[Math.round(card.cardPositionIndex / 2) - 1].push(card);
  //   }
  // }

  const handleOnPlayerAdded = () => {
    const index = players.length;
    console.log(index);
    players.push({
      index,
      firstCardIndex: index * 2 + 1,
      secondCardIndex: index * 2 + 2,
    });
    setPlayers(players);
  };

  const handleOnPlayerRemoved = () => {
    // setSeatedPlayers(seatedPlayers - 1);
    players.pop();
    setPlayers(players);
  };

  const seats = [];
  for (let i = 0; i < players.length; i++) {
    seats.push(<Player player={players[i]} />);
  }

  console.log(players);
  return (
    <div className="players">
      <Title text={'Players'} />
      {seats}
      <AddPlayer onPlayerAdded={handleOnPlayerAdded} seatedPlayers={players.length} />
      <RemovePlayer onPlayerRemoved={handleOnPlayerRemoved} seatedPlayers={players.length} />
    </div>
  );
};

export default Seats;
