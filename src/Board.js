import React, { useState } from "react";
import Tile from "./Tile";
import { TILE_COUNT, GRID_SIZE, BOARD_SIZE } from "./constants"

function Board() {
  const [tiles, setTiles] = useState([...Array(TILE_COUNT).keys()]);

  const pieceWidth = Math.round(BOARD_SIZE / GRID_SIZE);
  const pieceHeight = Math.round(BOARD_SIZE / GRID_SIZE);
  const style = {
    width: BOARD_SIZE,
    height: BOARD_SIZE,
  };

  return (
    <>
      <ul style={style} className="board">
        {tiles.map((tile, index) => (
          <Tile
            key={tile}
            index={index}
            tile={tile}
            width={pieceWidth}
            height={pieceHeight}
          />
        ))}
      </ul>
    </>
  );
}

export default Board;
