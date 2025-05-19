const games = ["TIC-TAC-Toe", "Chess", "Sudoku", "Minesweeper", "Snake"];

const Games = () => {
  return (
    <div className="games-section">
      <div className="games-overlay">
        <h2>Game Zone</h2>
        <div className="game-list">
          {games.map((game) => (
            <button
              key={game}
              className="game-button"
              onClick={() => alert(`Launching ${game}`)}
            >
              {game}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
