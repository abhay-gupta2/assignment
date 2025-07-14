// FullscreenGridScroll.jsx
import React, { useEffect, useState } from 'react';

const GRID_ROWS = 20; // More rows to fill the screen
const GRID_COLS = 30; // More columns to cover full width
const FILLED_COUNT = 20;

const getRandomCells = () => {
  const cells = new Set();
  while (cells.size < FILLED_COUNT) {
    const x = Math.floor(Math.random() * GRID_ROWS);
    const y = Math.floor(Math.random() * GRID_COLS);
    cells.add(`${x}-${y}`);
  }
  return cells;
};

const FullscreenGridScroll = () => {
  const [filledCells, setFilledCells] = useState(getRandomCells());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFilledCells(getRandomCells());
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden">
      <div className="grid"
           style={{
             gridTemplateColumns: `repeat(${GRID_COLS}, minmax(20px, 1fr))`,
             gridTemplateRows: `repeat(${GRID_ROWS}, minmax(20px, 1fr))`,
             width: '100vw',
             height: '100vh',
           }}>
        {[...Array(GRID_ROWS)].map((_, row) =>
          [...Array(GRID_COLS)].map((_, col) => {
            const cellId = `${row}-${col}`;
            const isFilled = filledCells.has(cellId);
            return (
              <div
                key={cellId}
                className={`transition-all duration-300 ${
                  isFilled ? 'bg-purple-600' : 'bg-white'
                } border border-purple-100`}
              />
            );
          })
        )}
      </div>
      {/* Add scrollable content below to trigger scroll */}
      <div className="h-[200vh] w-full"></div>
    </div>
  );
};

export default FullscreenGridScroll;
