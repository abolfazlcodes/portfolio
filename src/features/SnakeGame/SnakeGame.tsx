import { useEffect } from 'react';
import {
  Direction,
  GameStatusProps,
} from '@/interface/Square.types';
import {
  StoreType,
  AppDispatch,
  RootState,
} from '@/interface/Store.types';
import { connect } from 'react-redux';
import {
  resetGame,
  setDirection,
  togglePause,
  updateBoard,
} from '@/store/SnakeSlice';
import GameComponent from '@/ui/GameComponent';

export type AppProps = GameStatusProps &
  StoreType & {
    moveSnake: () => void;
    // eslint-disable-next-line no-unused-vars
    changeDirection: (dir: Direction) => void;
  };

function SnakeGame({
  speed,
  moveSnake,
  onTogglePause,
  changeDirection,
  ...boardProps
}: AppProps) {
  useEffect(() => {
    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [speed, moveSnake]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
        case 'ArrowDown':
        case 'ArrowLeft':
        case 'ArrowRight':
          changeDirection(e.key as Direction);
          break;
        case ' ': // when space bar is clicked
          onTogglePause();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () =>
      document.removeEventListener('keydown', handleKeyDown);
  }, [changeDirection, onTogglePause]);

  return (
    <>
      <GameComponent {...boardProps} />
    </>
  );
}

const mapStateToProps = ({ snake: state }: RootState) => ({
  ...state,
  score: state.snake.length - 1,
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  moveSnake: () => dispatch(updateBoard()),
  onTogglePause: () => dispatch(togglePause()),
  onReset: () => dispatch(resetGame()),
  changeDirection: (direction: Direction) =>
    dispatch(setDirection(direction)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnakeGame);
