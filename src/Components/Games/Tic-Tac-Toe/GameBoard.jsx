import { useState } from "react";

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const GameBoard = ({ onstateChange, board }) => {
  //   //   const [gameBoard, setGameBoard] = useState(initialGameBoard);

  //   //   const handleClick = (rowIndex, colIndex) => {
  //   //     setGameBoard((prevGameBoard) => {
  //   //       const board = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //   //       board[rowIndex][colIndex] = active;
  //   //       return board;
  //   //     });
  //   //     onstateChange();
  //   let gameBoard = initialGameBoard;
  //   for (const turn of turns) {
  //     const { square, Player } = turn;
  //     const { row, col } = square;
  //     gameBoard[row][col] = Player;
  //   }

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  className="players button"
                  onClick={() => onstateChange(rowIndex, colIndex)}
                  disabled={board[rowIndex][colIndex]}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};
export default GameBoard;
