import { Direction } from '@/interface/Square.types';

export const isValidDirectionChange = (
  currentDirection: Direction,
  newDirection: Direction
) => {
  return (
    (currentDirection === 'ArrowUp' &&
      newDirection !== 'ArrowDown') ||
    (currentDirection === 'ArrowDown' &&
      newDirection !== 'ArrowUp') ||
    (currentDirection === 'ArrowLeft' &&
      newDirection !== 'ArrowRight') ||
    (currentDirection === 'ArrowRight' &&
      newDirection !== 'ArrowLeft')
  );
};

export const isSnakeCollision = (snake: number[]) => {
  const head = snake[0];
  return snake.slice(1).includes(head);
};

export const getRandomPos = (nRows: number, nCols: number) =>
  Math.floor(Math.random() * nRows * nCols - 1);

export const moveSnake = (
  snake: number[],
  nRows: number,
  nCols: number,
  direction: Direction
) => {
  const head = snake[0];

  switch (direction) {
    case 'ArrowUp':
      snake.unshift(head - nCols);
      if (snake[0] < 0) snake[0] += nCols * nRows;
      break;
    case 'ArrowDown':
      snake.unshift(head + nCols);
      if (snake[0] >= nCols * nRows) snake[0] -= nCols * nRows;
      break;
    case 'ArrowLeft':
      snake.unshift(head - 1);
      if (head % nCols === 0) snake[0] += nCols;
      break;
    case 'ArrowRight':
      snake.unshift(head + 1);
      if (head % nCols === nCols - 1) snake[0] -= nCols;
      break;
  }
  return snake;
};
