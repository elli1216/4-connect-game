import React from "react";
import '../css/Game.css';

const GameCircle = ({id, children, className, onCircleClicked}) => {
  return (
    <div className={`game-circle ${className}`} onClick={() => onCircleClicked(id)}>
      {children}
    </div>
  )
}

export default GameCircle;