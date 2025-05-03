import React from "react";
import Grid from "./grid";

const EMPTY = "_";
const PLAYER_1 = "X";
const PLAYER_2 = "O";

function getEmptyGrid() {
  return [
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
    [EMPTY, EMPTY, EMPTY],
  ].slice();
}

export default function TicTacToe() {
  const [grid, setGrid] = React.useState<string[][]>(getEmptyGrid());
  const [currentPlayer, setCurrentPlayer] = React.useState(PLAYER_1);

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col] === EMPTY) {
      grid[row][col] = currentPlayer;
      setGrid(grid.slice());
      setCurrentPlayer(currentPlayer === PLAYER_1 ? PLAYER_2 : PLAYER_1);
    }
  };

  const handleRestart = () => {
    setGrid(getEmptyGrid());
    setCurrentPlayer(PLAYER_1);
  };

  return (
    <div id="game-container" className="container">
      <Grid grid={grid} handleCellClick={handleCellClick} />
      <button className="action-button" type="reset" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}
