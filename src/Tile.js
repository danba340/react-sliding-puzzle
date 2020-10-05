import React from "react";
import { Motion, spring } from "react-motion";
import { getMatrixPosition, getVisualPosition } from "./helpers";

function Tile(props) {
  const { tile, index, rows, cols, width, height, boardSize, image } = props;

  const handleClick = () => {
    props.onClick(index);
  };

  const matrixPos = getMatrixPosition(index, rows, cols);
  const visualPos = getVisualPosition(matrixPos, width, height);
  const motionStyle = {
    translateX: spring(visualPos.x),
    translateY: spring(visualPos.y),
  };
  const tileStyle = {
    width: `calc(100% / ${rows})`,
    height: `calc(100% / ${cols})`,
    backgroundImage: `url(${image})`,
    backgroundSize: `${boardSize * 1.25}px`,
    backgroundPosition: `${(100 / cols) * (tile % cols)}% ${
      (100 / rows) * Math.floor(tile / rows)
    }%`,
  };

  return (
    <Motion style={motionStyle}>
      {({ translateX, translateY }) => (
        <li
          style={{
            transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
            opacity: tile === rows * cols - 1 ? 0 : 1,
            ...tileStyle,
          }}
          onClick={handleClick}
          className="tile"
        >
          {image.length ? "" : tile + 1}
        </li>
      )}
    </Motion>
  );
}

export default Tile;
