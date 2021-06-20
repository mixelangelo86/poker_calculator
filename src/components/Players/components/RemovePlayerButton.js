const RemovePlayerButton = ({ onPlayerRemoved }) => {
  return (
    <div className="button" onClick={onPlayerRemoved}>
      Remove Player
    </div>
  );
};

export default RemovePlayerButton;
