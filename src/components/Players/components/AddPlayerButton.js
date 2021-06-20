const AddPlayerButton = ({ onPlayerAdded }) => {
  return (
    <div className="button" onClick={onPlayerAdded}>
      Add Player
    </div>
  );
};

export default AddPlayerButton;
