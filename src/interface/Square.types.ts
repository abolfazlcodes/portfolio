export enum SquareValue {
  Empty = 'Empty',
  SnakeBody = 'snake-body',
  SnakeHead = 'snake-head',
  Food = 'food',
}

export type Direction =
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight';

export interface SquareProps {
  value: SquareValue;
  direction: Direction;
  backgroundColor: string;
}

export interface BoardProps {
  food: number;
  snake: number[];
  direction: Direction;
}

export enum GameState {
  Paused = 'paused',
  GameOver = 'game over',
  InProgress = 'in progress',
  Initial = 'initial',
}

export interface GameStatusProps {
  gameState: GameState;
  score: number;
  onReset: () => void;
  onTogglePause: () => void;
}
