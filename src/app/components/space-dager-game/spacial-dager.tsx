'use client';
import React, { useState, useEffect, useRef } from 'react';

interface Position {
  x: number;
  y: number;
}

interface Meteor {
  x: number;
  y: number;
  speed: number;
}

const SpacialDager = () => {
  const [spaceshipPosition, setSpaceshipPosition] = useState<Position>({
    x: 475,
    y: 325,
  });
  const [spaceshipSpeed, setSpaceshipSpeed] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [meteors, setMeteors] = useState<Meteor[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const spaceshipRef = useRef(null);

  const maxSpeed = 7;
  const acceleration = 0.2;

  const moveSpaceship = (e: KeyboardEvent) => {
    let deltaX = 0;
    let deltaY = 0;

    if (e.key === 'ArrowUp') deltaY = -spaceshipSpeed;
    if (e.key === 'ArrowDown') deltaY = spaceshipSpeed;
    if (e.key === 'ArrowLeft') deltaX = -spaceshipSpeed;
    if (e.key === 'ArrowRight') deltaX = spaceshipSpeed;

    setSpaceshipPosition((prev) => ({
      x: Math.min(Math.max(prev.x + deltaX, 0), 750), // Ajustado para menos ancho
      y: Math.min(Math.max(prev.y + deltaY, 0), 600),
    }));
  };

  const generateMeteor = (): Meteor => {
    const meteorSpeed = Math.random() * 7 + 1;
    const meteorX = Math.random() * 750; // Ajustado para menos ancho
    const meteorY = -50;
    return { x: meteorX, y: meteorY, speed: meteorSpeed };
  };

  const checkCollision = (spaceship: Position, meteor: Meteor): boolean => {
    const spaceshipSize = 50;
    const meteorSize = 40;
    return (
      spaceship.x < meteor.x + meteorSize &&
      spaceship.x + spaceshipSize > meteor.x &&
      spaceship.y < meteor.y + meteorSize &&
      spaceship.y + spaceshipSize > meteor.y
    );
  };

  const updateMeteors = () => {
    setMeteors((prevMeteors) => {
      const newMeteors = prevMeteors
        .map((meteor) => ({
          ...meteor,
          y: meteor.y + meteor.speed,
        }))
        .filter((meteor) => meteor.y < 650);

      if (Math.random() < 0.06) {
        newMeteors.push(generateMeteor());
      }
      return newMeteors;
    });
  };

  const handleGameLoop = () => {
    if (gameOver) return;

    updateMeteors();
    meteors.forEach((meteor) => {
      if (checkCollision(spaceshipPosition, meteor)) {
        setGameOver(true);
      }
    });
    setScore((prevScore) => prevScore + 1);
  };

  const restartGame = () => {
    setSpaceshipPosition({ x: 475, y: 325 });
    setMeteors([]);
    setScore(0);
    setGameOver(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  useEffect(() => {
    const speedInterval = setInterval(() => {
      setSpaceshipSpeed((prevSpeed) =>
        prevSpeed < maxSpeed ? prevSpeed + acceleration : maxSpeed
      );
    }, 1000 / 60);

    return () => clearInterval(speedInterval);
  }, []);

  useEffect(() => {
    if (!gameOver && gameStarted) {
      window.addEventListener('keydown', moveSpaceship);
      const gameInterval = setInterval(handleGameLoop, 1000 / 60);
      return () => {
        clearInterval(gameInterval);
        window.removeEventListener('keydown', moveSpaceship);
      };
    }
  }, [spaceshipPosition, meteors, gameOver, gameStarted]);

  return (
    <div className='relative w-[800px] h-[650px] bg-black border-2 border-white overflow-hidden mx-auto bg-espacio object-contain'>
      {!gameStarted && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-30'>
          <h2 className='text-2xl mb-4'>Spacial Dager</h2>
          <button
            onClick={startGame}
            className='px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-800'
          >
            Iniciar Juego
          </button>
        </div>
      )}

      {gameOver && (
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-30'>
          <h2 className='text-2xl mb-4'>Game Over</h2>
          <button
            onClick={restartGame}
            className='px-6 py-2 bg-red-600 text-white rounded-full hover:bg-red-800'
          >
            Reiniciar
          </button>
        </div>
      )}

      <div className='absolute top-2 left-2 text-white text-xl z-[50]'>
        Score: {score}
      </div>

      <img
        src='/dager1.jpg'
        className='absolute w-[50px] h-[50px] border-[#826293] border-[1px]'
        style={{
          top: spaceshipPosition.y + 'px',
          left: spaceshipPosition.x + 'px',
        }}
        ref={spaceshipRef}
      ></img>

      {meteors.map((meteor, index) => (
        <img
          src='/pepinospace.png'
          key={index}
          className='absolute w-[60px] h-[60px] object-contain '
          style={{
            top: meteor.y + 'px',
            left: meteor.x + 'px',
          }}
        ></img>
      ))}
    </div>
  );
};

export default SpacialDager;
