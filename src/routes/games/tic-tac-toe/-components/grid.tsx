interface GridProps {
  grid: string[][];
  handleCellClick: (row: number, col: number) => void;
}

export default function Grid({ grid, handleCellClick }: GridProps) {
  return (
    <div className="grid">
      {grid.map((row, rowIndex) => (
        <div key={`row-${rowIndex}-${row.join("-")}`} className="grid-row">
          {row.map((cell, colIndex) => (
            <button
              key={`cell-${rowIndex}-${colIndex}-${cell}`}
              className="grid-cell"
              type="button"
              onClick={() => handleCellClick(rowIndex, colIndex)}
            >
              <p>{cell}</p>
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
