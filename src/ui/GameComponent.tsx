import { useEffect, useRef, useState, useCallback } from 'react';
import GameButton from './GameButton';

const direction = {
  LEFT: 'ArrowLeft',
  RIGHT: 'ArrowRight',
  UP: 'ArrowUp',
  DOWN: 'ArrowDown',
};

function generateRadius(currentDirection: string) {
  switch (currentDirection) {
    case direction.RIGHT:
      return [0, 5, 5, 0];

    case direction.DOWN:
      return [0, 0, 5, 5];

    case direction.LEFT:
      return [5, 0, 0, 5];

    case direction.UP:
      return [5, 5, 0, 0];

    default:
      return [0, 5, 5, 0];
  }
}

function calculateConsistentOpacityColor(index: number) {
  index = Math.min(Math.max(index, 0), 99);

  const opacity = (0.99 - index * 0.04).toFixed(2);

  // Convert opacity to a hexadecimal value (0 to 255)
  const opacityHex = Math.floor(+opacity * 255)
    .toString(16)
    .toUpperCase();

  const paddedOpacityHex =
    opacityHex.length === 1 ? `0${opacityHex}` : opacityHex;

  return `${'#43d9ad'}${paddedOpacityHex}`;
}

/* eslint-disable react/jsx-no-comment-textnodes */
function GameComponent() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  let FPS = 1000 / 10;
  let currentDirection = '';
  let directionQueue: string[] = [];
  const squareSize = 10;
  let width: number;
  let height: number;
  let horizontalSq: number;
  let verticalSq: number;
  let gameStarted = false;
  let gameLoop: any;

  if (canvasRef.current) {
    width = canvasRef.current.width;
    height = canvasRef.current.height;

    horizontalSq = width / squareSize;
    verticalSq = height / squareSize;
  }

  const [snake, setSnake] = useState([
    { x: 17, y: 10 },
    { x: 16, y: 10 },
    { x: 15, y: 10 },
  ]);

  function roundRect(
    x: number,
    y: number,
    width: number,
    height: number,
    radius: number[],
    fill: boolean
  ) {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');

      if (context) {
        context.beginPath();
        context.moveTo(x + radius[0], y);
        context.lineTo(x + width - radius[1], y);
        context.quadraticCurveTo(
          x + width,
          y,
          x + width,
          y + radius[1]
        );
        context.lineTo(x + width, y + height - radius[2]);
        context.quadraticCurveTo(
          x + width,
          y + height,
          x + width - radius[2],
          y + height
        );
        context.lineTo(x + radius[3], y + height);
        context.quadraticCurveTo(
          x,
          y + height,
          x,
          y + height - radius[3]
        );
        context.lineTo(x, y + radius[0]);
        context.quadraticCurveTo(x, y, x + radius[0], y);
        context.closePath();
        if (fill) {
          context.fill();
        }
      }
    }
  }

  const drawSquare = (
    x: number,
    y: number,
    color: string,
    isRounded: boolean
  ) => {
    const sq = squareSize;
    const radius = generateRadius(currentDirection);
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');

      if (context) {
        context.fillStyle = color;

        if (isRounded) {
          roundRect(x * sq, y * sq, sq, sq, radius, true); // Adjust the radius and set "true" for fill
        } else {
          context.fillRect(x * sq, y * sq, sq, sq);
        }
      }
    }
  };

  const drawSnake = () => {
    if (canvasRef.current) {
      snake.forEach((tile, i) => {
        const isRounded = i === 0;
        let color = calculateConsistentOpacityColor(i);
        drawSquare(tile.x, tile.y, color, isRounded);
      });
    }
  };

  const createFood = () => {
    let food = {
      x: Math.floor(Math.random() * horizontalSq),
      y: Math.floor(Math.random() * verticalSq),
    };

    while (
      snake.some(
        (tile) => tile.x === food.x && tile.y === food.y
      )
    ) {
      food = {
        x: Math.floor(Math.random() * horizontalSq),
        y: Math.floor(Math.random() * verticalSq),
      };
    }

    return food;
  };

  let food = createFood();

  function calculateShadowColor(
    baseColor: string,
    opacity: number
  ) {
    // Parse the baseColor and extract its RGB components
    const r = parseInt(baseColor.slice(1, 3), 16);
    const g = parseInt(baseColor.slice(3, 5), 16);
    const b = parseInt(baseColor.slice(5, 7), 16);

    // Calculate the new shadow color with the specified opacity
    const shadowColor = `rgba(${r}, ${g}, ${b}, ${opacity})`;

    return shadowColor;
  }

  const drawFood = () => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');

      const numShadows = 1; // Number of shadows
      const radius = squareSize / 2; // Radius of the main circle
      const centerX = food?.x * squareSize + radius; // X-coordinate of the circle's center
      const centerY = food?.y * squareSize + radius; // Y

      if (context) {
        for (let i = 1; i <= numShadows; i++) {
          const opacity = 0.1 + 0.1 * i; // Adjust opacity based on your preference
          const shadowColor = calculateShadowColor(
            '#43d9ad',
            opacity
          );

          // Draw the shadow circle with varying opacity and radius
          context.fillStyle = shadowColor;
          context.beginPath();
          context.arc(
            centerX,
            centerY,
            radius + i * 5,
            0,
            Math.PI * 2
          );
          context.fill();

          // Draw the main circle (food)
          context.fillStyle = '#43d9ac';
          context.beginPath();
          context.arc(centerX, centerY, radius, 0, Math.PI * 2);
          context.fill();
        }
      }
    }
  };

  const drawBoard = () => {
    if (canvasRef.current) {
      const context = canvasRef.current.getContext('2d');
      if (context) {
        context.fillStyle = '#011627d6';
        context.fillRect(0, 0, width, height);
      }
    }
  };

  function hasEatenFood() {
    const head = snake[0];
    return head?.x === food?.x && head?.y === food?.y;
  }

  const moveSnake = () => {
    if (!gameStarted) return;

    const head = { ...snake[0] };

    if (directionQueue.length) {
      currentDirection = directionQueue.shift() as string;
    }

    switch (currentDirection) {
      case direction.LEFT:
        head.x -= 1;
        break;
      case direction.RIGHT:
        head.x += 1;
        break;
      case direction.UP:
        head.y -= 1;
        break;
      case direction.DOWN:
        head.y += 1;
        break;
    }

    // if snake eats the food, we do not need to pop
    if (hasEatenFood()) {
      food = createFood();
    } else {
      snake.pop();
    }

    snake.unshift(head);
  };

  const hitWall = () => {
    const head = snake[0];
    return (
      head?.x < 0 ||
      head?.x >= horizontalSq ||
      head?.y < 0 ||
      head?.y >= verticalSq
    );
  };

  const hitSelf = () => {
    const snakeBody = [...snake];
    const head = snakeBody.shift(); // remove the snake head and keep it

    return snakeBody.some(
      (tile) => tile?.x === head?.x && tile?.y === head?.y
    );
  };

  const gameOver = () => {
    alert('game over');
  };

  const renderGame = () => {
    drawBoard();
    drawFood();
    drawSnake();
    moveSnake();

    if (hitWall() || hitSelf()) {
      clearInterval(gameLoop);
      gameOver();
    }
  };

  const setDirection = (e: KeyboardEvent) => {
    const newDirection = e.key;
    const oldDirection = currentDirection;

    if (
      (newDirection === direction.LEFT &&
        oldDirection !== direction.RIGHT) ||
      (newDirection === direction.RIGHT &&
        oldDirection !== direction.LEFT) ||
      (newDirection === direction.UP &&
        oldDirection !== direction.DOWN) ||
      (newDirection === direction.DOWN &&
        oldDirection !== direction.UP)
    ) {
      if (!gameStarted) {
        // our snake cannot move to left initially, so we return if the ArrowLeft is clicked;
        if (e.key === direction.LEFT) return;

        gameStarted = true;
        gameLoop = setInterval(renderGame, FPS);
      }
      directionQueue.push(newDirection);
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      canvasRef.current.height = 450;
      canvasRef.current.width = 30 * 10;
    }
    renderGame();

    document.addEventListener('keyup', setDirection);

    return () =>
      document.removeEventListener('keyup', setDirection);
  }, [food, snake, drawBoard]);

  return (
    <div className='flex h-3/4 w-2/5 rounded-lg border border-[#0c1616] bg-game-board p-12 shadow-game-box-shadow backdrop-blur-xl'>
      {/* game board */}
      <div className='relative z-10 w-full rounded-lg bg-[#011627d6] shadow-game-panel'>
        {/* game-over overlay ==> should become flex to be shown */}
        <div className='absolute left-0 right-0 top-0  hidden h-full w-full flex-col items-center justify-end rounded-lg bg-[#0000004f] pb-20 text-xl text-[#fff]'>
          <h1 className='flex h-18 w-full items-center justify-center rounded-lg bg-[#011627] text-4xl font-normal uppercase text-[#43d9ad] shadow-game-over'>
            game over
          </h1>
          <p className='mt-4 cursor-pointer px-6 py-4 text-center text-2xl font-medium text-[#607b96]'>
            play-again
          </p>
        </div>

        {/* game canvas */}
        <canvas
          ref={canvasRef}
          className='h-full w-full rounded-lg bg-[#011627d6] shadow-game-canvas'
        ></canvas>
      </div>

      {/* game info panel */}
      <div className='z-10 flex w-full flex-col justify-between gap-4 rounded-lg px-4'>
        {/* game keys div */}
        <div className='m-auto flex h-max w-full flex-col justify-center gap-6 rounded-lg p-4'>
          <div className='gameKeys--des'>
            <p className='text-2xl font-normal leading-10 text-[#fff]'>
              // use keyboard
            </p>
            <p className='text-2xl font-normal leading-10 text-[#fff]'>
              // arrows to play
            </p>
          </div>
          {/* <div className='m-auto grid w-max grid-cols-3 grid-rows-2 gap-2'>
            <GameButton position='col-start-2' direction='up' />
            <GameButton
              position='row-start-2'
              direction='left'
            />
            <GameButton
              position='row-start-2'
              direction='down'
            />
            <GameButton
              position='row-start-2'
              direction='right'
            />
          </div> */}
        </div>
        {/* game details div */}
        <div className='m-auto h-full w-full rounded-lg'>
          <p className='comment-text score'></p>
          <span className='comment-text high-score'></span>
        </div>
        {/* game actions div */}
        <div className='m-auto flex w-full items-center justify-end gap-4'>
          <button className='inline-flex cursor-pointer items-center justify-center gap-4 rounded-lg border border-[#fff] bg-none px-6 py-5 text-xl text-[#fff]'>
            pause
          </button>
        </div>
      </div>

      {/* pointer signs */}
    </div>
  );
}

export default GameComponent;
