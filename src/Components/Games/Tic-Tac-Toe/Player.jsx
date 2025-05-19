import { useState } from "react";

const Player = ({ onSave, initialName, symbol, isActive }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    console.log(isEditing);
    setIsEditing((prevEditing) => {
      const newEditing = !prevEditing;
      if (newEditing) {
        // When entering edit mode, don't save yet
        return newEditing;
      } else {
        console.log("yes");
        // When exiting edit mode, save the name
        onSave(symbol, playerName);
        return newEditing;
      }
    });
  };
  const handlePlayerName = (event) => {
    setPlayerName(event.target.value);
  };

  let name = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    name = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerName}
      ></input>
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {name}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleClick}>{!isEditing ? "Edit Name" : "Save"}</button>
    </li>
  );
};
export default Player;
