'use client';
import React, { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

const CELL_SIZE = 40;
const BOARD_WIDTH = 20;
const BOARD_HEIGHT = 15;

const DIRECTIONS: { [key: string]: Position } = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
};

const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 15, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 10, y: 5 });
  const [direction, setDirection] = useState<Position>(DIRECTIONS.ArrowRight);
  const [score, setScore] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!gameOver && gameStarted) moveSnake();
    }, 150);
    return () => clearInterval(interval);
  }, [snake, direction, gameOver, gameStarted]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (DIRECTIONS[e.key] && !isOppositeDirection(DIRECTIONS[e.key])) {
        setDirection(DIRECTIONS[e.key]);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  const isOppositeDirection = (newDirection: Position): boolean => {
    if (snake.length > 1) {
      const currentDirection = direction;
      if (
        (currentDirection === DIRECTIONS.ArrowUp &&
          newDirection === DIRECTIONS.ArrowDown) ||
        (currentDirection === DIRECTIONS.ArrowDown &&
          newDirection === DIRECTIONS.ArrowUp) ||
        (currentDirection === DIRECTIONS.ArrowLeft &&
          newDirection === DIRECTIONS.ArrowRight) ||
        (currentDirection === DIRECTIONS.ArrowRight &&
          newDirection === DIRECTIONS.ArrowLeft)
      ) {
        return true;
      }
    }
    return false;
  };

  const moveSnake = () => {
    const newHead: Position = {
      x: (snake[0].x + direction.x + BOARD_WIDTH) % BOARD_WIDTH,
      y: (snake[0].y + direction.y + BOARD_HEIGHT) % BOARD_HEIGHT,
    };

    if (
      snake.some(
        (segment) => segment.x === newHead.x && segment.y === newHead.y
      )
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [newHead, ...snake];

    if (newHead.x === food.x && newHead.y === food.y) {
      setScore(score + 1);
      setFood(generateFood(newSnake));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const generateFood = (snakePositions: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * BOARD_WIDTH),
        y: Math.floor(Math.random() * BOARD_HEIGHT),
      };
    } while (
      snakePositions.some(
        (segment) => segment.x === newFood.x && segment.y === newFood.y
      )
    );
    return newFood;
  };

  const resetGame = () => {
    setSnake([{ x: 15, y: 10 }]);
    setFood({ x: 10, y: 5 });
    setDirection(DIRECTIONS.ArrowRight);
    setScore(0);
    setGameOver(false);
    setGameStarted(false);
  };

  if (!gameStarted) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Snake Game</h1>
        <button
          onClick={() => setGameStarted(true)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',
            margin: '10px',
          }}
        >
          Iniciar Juego
        </button>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <div
        style={{
          position: 'relative',
          width: `${CELL_SIZE * BOARD_WIDTH}px`,
          height: `${CELL_SIZE * BOARD_HEIGHT}px`,
          border: '2px solid black',
          margin: '0 auto',
          background: 'black',
        }}
      >
        <img
          src='/pepinosnake.png'
          style={{
            position: 'absolute',
            top: `${food.y * CELL_SIZE}px`,
            left: `${food.x * CELL_SIZE}px`,
            width: `${CELL_SIZE}px`,
            height: `${CELL_SIZE}px`,
            borderRadius: '50%',
          }}
          alt='Food'
        />

        {snake.map((segment, index) => (
          <img
            key={index}
            src='/dager1.jpg'
            alt='Snake Segment'
            style={{
              position: 'absolute',
              top: `${segment.y * CELL_SIZE}px`,
              left: `${segment.x * CELL_SIZE}px`,
              width: `${CELL_SIZE}px`,
              height: `${CELL_SIZE}px`,
              borderRadius: '4px',
            }}
          />
        ))}
      </div>

      <h2>Score: {score}</h2>
      {gameOver && (
        <>
          <h2 style={{ color: 'red' }}>Game Over!</h2>
          <button
            onClick={resetGame}
            style={{ padding: '10px 20px', fontSize: '16px' }}
          >
            Reiniciar Juego
          </button>
        </>
      )}
    </div>
  );
};

export default SnakeGame;
