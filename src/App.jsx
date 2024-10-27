import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './App.css'

function App() {

  const [playerX, setPlayerX] = useState(300); // Player car's initial x position
  const [opponents, setOpponents] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);


  const Ship = styled.img`
    height: 100px;
    width: 100px;
    position: absolute;
    top: auto;
    bottom: 10px;
    left: ${(props) => props.x + 'px'};
    border-radius: 5px;
  `;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && playerX > 0) setPlayerX(playerX - 20);
      if (e.key === 'ArrowRight' && playerX < 600) setPlayerX(playerX + 20);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [playerX]);

  return (
    <>
      <div id='gameContainer'>
        <div id='score'>Score</div>
        <Ship src='src/pictures/ship.png' alt='Player ship' x={playerX}></Ship>
      </div>

    </>
  )
}

export default App
