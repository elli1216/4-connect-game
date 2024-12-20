import React, { useEffect, useState } from "react";
import GameCircle from "./GameCircle";
import '../css/Game.css';
import Header from "./Header";
import Footer from "./Footer";
import { isWinner, isDraw, getComputerMove } from "./utils/helper";
import { GAME_STATE_PLAYING, GAME_STATE_WIN, NO_PLAYER, NO_CIRCLES, PLAYER_ONE, PLAYER_TWO, GAME_STATE_DRAW } from "./utils/Constants";

const GameBoard = () => {
  const [gameBoard, setGameboard] = useState(Array(NO_CIRCLES).fill(NO_PLAYER));
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [gameState, setGameState] = useState(GAME_STATE_PLAYING);
  const [winner, setWinner] = useState(NO_PLAYER);

  useEffect(() => {
    initGame();
  }, [])

  const initGame = () => {
    setGameboard(Array(NO_CIRCLES).fill(NO_PLAYER));
    setCurrentPlayer(PLAYER_ONE);
    setGameState(GAME_STATE_PLAYING);
    setWinner(NO_PLAYER);
  }

  const initBoard = () => {
    const circles = [];
    for (let i = 0; i < NO_CIRCLES; i++) {
      circles.push(renderCircle(i));
    }
    return circles;
  }

  const suggestMove = () => {
    circleClicked(getComputerMove(gameBoard));
  }

  const circleClicked = (id) => {

    if(gameBoard[id] !== NO_PLAYER) return;
    if(gameState !== GAME_STATE_PLAYING) return;

    if(isWinner(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_WIN);
      setWinner(currentPlayer);
    }
    if(isDraw(gameBoard, id, currentPlayer)) {
      setGameState(GAME_STATE_DRAW);
      setWinner(NO_PLAYER);
    }

    setGameboard(prev => {
      return prev.map((circle, pos) => {
        if (pos === id) return currentPlayer;
        return circle;
      })
    })

    setCurrentPlayer(currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE);
  }

  const renderCircle = (id) => {
    return <GameCircle key={id} id={id} className={`player-${gameBoard[id]}`} onCircleClicked={circleClicked} />
  }

  return (
    <>
      <Header gameState={gameState} currentPlayer={currentPlayer} winner={winner}/>
      <div className="game-board">
        {initBoard()}
      </div>
      <Footer onNewGameClick={initGame} onSuggestClick={suggestMove} gameState={gameState}/>
    </>
  );
}

export default GameBoard;