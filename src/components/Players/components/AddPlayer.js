const AddPlayer = ({ onPlayerAdded, seatedPlayers }) => {
  return (
    <div className={`button ${seatedPlayers > 4 && 'disabled'} `} onClick={onPlayerAdded}>
      Add Player
    </div>
  );
};

export default AddPlayer;
