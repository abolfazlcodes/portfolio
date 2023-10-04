import { AppDispatch, RootState } from '@/interface/Store.types';
import { togglePause } from '@/store/SnakeSlice';
import { useDispatch, useSelector } from 'react-redux';
import GameButton from './GameButton';
import { GameState } from '@/interface/Square.types';

/* eslint-disable react/jsx-no-comment-textnodes */
function GamePanel() {
  const { gameState } = useSelector(
    (state: RootState) => state.snake
  );
  const dispatch: AppDispatch = useDispatch();

  const handlePauseGameOver = () => {
    if (gameState === GameState.InProgress) {
      dispatch(togglePause());
    } else if (gameState === GameState.Paused) {
      dispatch(togglePause());
    }
  };

  return (
    <div className='z-10 flex w-full flex-col justify-between gap-4 rounded-lg px-4'>
      <div className='m-auto flex h-max w-full flex-col justify-center gap-6 rounded-lg p-4'>
        <div className='mb-4'>
          <p className='text-2xl font-normal leading-10 text-[#fff]'>
            // use keyboard
          </p>
          <p className='text-2xl font-normal leading-10 text-[#fff]'>
            // arrows to play
          </p>
          <p className='text-2xl font-normal leading-10 text-[#fff]'>
            // press space to pause
          </p>
        </div>
        <div className='m-auto grid w-max grid-cols-3 grid-rows-2 gap-2'>
          <GameButton position='col-start-2' direction='up' />
          <GameButton position='row-start-2' direction='left' />
          <GameButton position='row-start-2' direction='down' />
          <GameButton position='row-start-2' direction='right' />
        </div>
      </div>
      <div className='m-auto h-full w-full rounded-lg'>
        <p className='comment-text score'></p>
        <span className='comment-text high-score'></span>
      </div>
      <div className='m-auto flex w-full items-center justify-end gap-4'>
        <button
          onClick={handlePauseGameOver}
          className='inline-flex cursor-pointer items-center justify-center gap-4 rounded-lg border border-[#fff] bg-none px-6 py-5 text-xl text-[#fff]'
        >
          {gameState === GameState.InProgress
            ? 'pause'
            : 'resume'}
        </button>
      </div>
    </div>
  );
}

export default GamePanel;
