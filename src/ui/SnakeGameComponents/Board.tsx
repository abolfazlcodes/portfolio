import { GameProps } from '@/interface/Square.types';
import { FC } from 'react';
import { motion } from 'framer-motion';
import GameBoard from '../GameBoard';
import GamePanel from '../GamePanel';

const Board: FC<GameProps> = ({ food, snake, direction }) => {
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
        <GameBoard
          direction={direction}
          food={food}
          snake={snake}
        />
      </div>
      <GamePanel />
    </motion.div>
  );
};

export default Board;
