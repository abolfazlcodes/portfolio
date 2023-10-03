import { createSlice } from '@reduxjs/toolkit';
import { GameState, Direction } from '@/interface/Square.types';
import { StoreType } from '@/interface/Store.types';
import {
  getRandomPos,
  isSnakeCollision,
  isValidDirectionChange,
  moveSnake,
} from '@/utils/Store.utils';

const DEFAULT_N_ROWS = 38;
const DEFAULT_N_COLS = 20;

const SnakeSlice = createSlice({
  name: 'snake',
  initialState: {
    speed: 150,
    nRows: DEFAULT_N_ROWS,
    nCols: DEFAULT_N_COLS,
    snake: [Math.floor((DEFAULT_N_ROWS * DEFAULT_N_COLS) / 2)],
    food: getRandomPos(DEFAULT_N_ROWS, DEFAULT_N_COLS),
    direction: 'ArrowUp',
    gameState: GameState.Initial,
  } as StoreType,

  reducers: {
    setDirection: (state, action) => {
      const direction = action.payload as Direction;
      if (!isValidDirectionChange(state.direction, direction))
        return;

      state.gameState = GameState.InProgress;
      state.direction = direction;
    },
    resetGame: (state) => {
      state.snake = [
        Math.floor((state.nRows * state.nCols) / 2),
      ];
      state.food = getRandomPos(state.nRows, state.nCols);
      state.direction = 'ArrowUp';
      state.gameState = GameState.InProgress;
    },
    updateBoard: (state: StoreType) => {
      if (state.gameState !== GameState.InProgress) return;

      const snake = moveSnake(
        state.snake,
        state.nRows,
        state.nCols,
        state.direction
      );

      if (snake[0] === state.food) {
        state.snake = snake;
        state.food = getRandomPos(state.nRows, state.nCols);
        // state.speed *= 0.9;
      } else {
        state.snake.pop();
      }

      if (isSnakeCollision(snake))
        state.gameState = GameState.GameOver;
    },
    togglePause: (state) => {
      if (state.gameState === GameState.InProgress)
        state.gameState = GameState.Paused;
      else if (state.gameState === GameState.Paused)
        state.gameState = GameState.InProgress;
    },
  },
});

export const {
  setDirection,
  togglePause,
  resetGame,
  updateBoard,
} = SnakeSlice.actions;

export default SnakeSlice.reducer;
