/* eslint-disable react/jsx-no-comment-textnodes */
import {
  BoardProps,
  GameState,
  SquareValue,
} from '@/interface/Square.types';
import { FC } from 'react';
import Square from './Square';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { store } from '@/store/Store';
import { resetGame, togglePause } from '@/store/SnakeSlice';
import { RootState } from '@/interface/Store.types';

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

const Board: FC<BoardProps> = ({ food, snake, direction }) => {
  const { snake: snakeState } = useSelector(
    (state: RootState) => state
  );
  const dispatch = useDispatch();

  const handlePauseGameOver = () => {
    if (snakeState?.gameState === GameState.GameOver) {
      dispatch(resetGame());
    } else {
      dispatch(togglePause());
    }
  };

  const getSnakeValue = (i: number) => {
    if (snake[0] === i) return SquareValue.SnakeHead;
    if (snake.includes(i)) return SquareValue.SnakeBody;

    if (i === food) return SquareValue.Food;
    return SquareValue.Empty;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 1,
        ease: [0, 0.71, 0.2, 1.01],
        scale: {
          type: 'spring',
          damping: 5,
          stiffness: 100,
          restDelta: 0.001,
        },
      }}
      className='hidden h-3/4 w-1/2 rounded-lg border-[#0c1616] bg-game-board p-12 shadow-game-box-shadow backdrop-blur-xl md:flex lg:w-2/5'
    >
      <div className='flex w-full '>
        <div className='relative z-10 w-full overflow-hidden  rounded-lg bg-[#011627d6] shadow-game-panel'>
          {/* game-over overlay ==> should become flex to be shown */}
          <div
            className={`absolute left-0 right-0 top-0 ${
              snakeState?.gameState === GameState.GameOver ||
              snakeState?.gameState === GameState.Paused
                ? 'flex'
                : 'hidden'
            } h-full w-full flex-col items-center justify-end rounded-lg bg-[#0000004f] pb-20 text-xl text-[#fff]`}
          >
            <h1 className='flex h-18 w-full items-center justify-center rounded-lg bg-[#011627] text-4xl font-normal uppercase text-[#43d9ad] shadow-game-over'>
              {snakeState?.gameState === GameState.GameOver
                ? 'game over'
                : 'game paused'}
            </h1>
            <p
              onClick={handlePauseGameOver}
              className='mt-4 cursor-pointer px-6 py-4 text-center text-2xl font-medium text-[#607b96]'
            >
              {snakeState?.gameState === GameState.GameOver
                ? 'play-again'
                : 'resume-game'}
            </p>
          </div>

          {/* game canvas */}
          <div className='grid-rows-38 grid-cols-20 grid h-full w-full rounded-lg bg-[#011627d6] shadow-game-canvas'>
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
        <div className='z-10 flex w-full flex-col justify-between gap-4 rounded-lg px-4'>
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
              <GameButton
                position='col-start-2'
                direction='up'
              />
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
            <button
              onClick={() => dispatch(togglePause())}
              className='inline-flex cursor-pointer items-center justify-center gap-4 rounded-lg border border-[#fff] bg-none px-6 py-5 text-xl text-[#fff]'
            >
              pause
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Board;
