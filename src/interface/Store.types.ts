import { Direction, GameState } from './Square.types';
import { type store } from '@/store/Store';

export interface StoreType {
  snake: number[];
  food: number;

  speed: number;
  nRows: number;
  nCols: number;

  direction: Direction;
  gameState: GameState;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
