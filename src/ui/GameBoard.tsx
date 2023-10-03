import { useSelector, useDispatch } from 'react-redux';
import {
  Direction,
  GameState,
  SquareValue,
} from '@/interface/Square.types';
import { AppDispatch, RootState } from '@/interface/Store.types';
import Square from './SnakeGameComponents/Square';
import { resetGame, togglePause } from '@/store/SnakeSlice';

function calculateConsistentOpacityColor(index: number) {
  index = Math.min(Math.max(index, 0), 99);

  const opacity = (0.99 - index * 0.04).toFixed(2);

  const opacityHex = Math.floor(+opacity * 255)
    .toString(16)
    .toUpperCase();

  const paddedOpacityHex =
    opacityHex.length === 1 ? `0${opacityHex}` : opacityHex;
  return `${'#43d9ad'}${paddedOpacityHex}`;
}

interface GameBoardProps {
  direction: Direction;
  snake: number[];
  food: number;
}

function GameBoard({ direction, snake, food }: GameBoardProps) {
  const { gameState } = useSelector(
    (state: RootState) => state.snake
  );
  const dispatch: AppDispatch = useDispatch();

  const getSnakeValue = (i: number) => {
    if (snake[0] === i) return SquareValue.SnakeHead;
    if (snake.includes(i)) return SquareValue.SnakeBody;

    if (i === food) return SquareValue.Food;
    return SquareValue.Empty;
  };

  const handlePauseGameOver = () => {
    if (gameState === GameState.GameOver) {
      dispatch(resetGame());
    } else {
      dispatch(togglePause());
    }
  };

  return (
    <div className='relative z-10 w-full overflow-hidden  rounded-lg bg-[#011627d6] shadow-game-panel'>
      <div
        className={`absolute left-0 right-0 top-0 z-40 ${
          gameState === GameState.GameOver ||
          gameState === GameState.Paused
            ? 'flex'
            : 'hidden'
        } h-full w-full flex-col items-center justify-end rounded-lg bg-[#0000004f] pb-20 text-xl text-[#fff]`}
      >
        <h1 className='flex h-18 w-full items-center justify-center rounded-lg bg-[#011627] text-4xl font-normal uppercase text-[#43d9ad] shadow-game-over'>
          {gameState === GameState.GameOver
            ? 'game over'
            : 'game paused'}
        </h1>
        <p
          onClick={handlePauseGameOver}
          className='mt-4 cursor-pointer px-6 py-4 text-center text-2xl font-medium text-[#607b96]'
        >
          {gameState === GameState.GameOver
            ? 'play-again'
            : 'resume-game'}
        </p>
      </div>

      <div className='grid h-full w-full grid-cols-20 grid-rows-38 rounded-lg bg-[#011627d6] shadow-game-canvas'>
        {Array(38 * 20)
          .fill(null)
          .map((_, i) => (
            <Square
              key={i}
              value={getSnakeValue(i)}
              direction={direction}
              backgroundColor={calculateConsistentOpacityColor(
                i
              )}
            />
          ))}
      </div>
    </div>
  );
}

export default GameBoard;
