import {
  SquareProps,
  SquareValue,
} from '@/interface/Square.types';
import { FC } from 'react';
import styles from './Square.module.css';

const Square: FC<SquareProps> = ({
  direction,
  value,
  backgroundColor,
}) => {
  return (
    <div
      className={`${styles.square} ${
        value === SquareValue.SnakeHead
          ? `bg-[#43d9ad]`
          : value === SquareValue.SnakeBody
          ? `bg-[${backgroundColor}]`
          : ''
      }`}
      data-value={
        value === SquareValue.SnakeHead ? direction : value
      }
    />
  );
};

export default Square;
