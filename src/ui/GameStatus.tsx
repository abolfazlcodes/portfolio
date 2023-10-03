import {
  GameState,
  GameStatusProps,
} from '@/interface/Square.types';
import { FC } from 'react';
import styled from 'styled-components';

const StyledGameStatus = styled.section`
  display: flex;
  flex-direction: column;
  width: 300px;
  text-align: center;

  input[type='text'] {
    margin: 0;
    padding: 5px;
    font-weight: bold;
    text-align: center;
    font-size: 1.6rem;
    text-transform: uppercase;
  }

  input[type='number'] {
    padding: 5px;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  border: none;

  background-color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: inline-block;
  text-transform: capitalize;
`;

const StyledResetButton = styled.button`
  &[type='reset'] {
    color: #f44336;
  }
`;

const GameStatus: FC<GameStatusProps> = ({
  gameState,
  onReset,
  onTogglePause,
  score,
}) => {
  return (
    <StyledGameStatus>
      <input type='text' value={gameState} disabled />

      <input type='number' value={score} disabled />

      <Wrapper>
        <StyledResetButton type='reset' onClick={onReset}>
          Reset
        </StyledResetButton>
        <StyledButton
          type='button'
          onClick={onTogglePause}
          disabled={gameState === GameState.GameOver}
        >
          {gameState === GameState.Paused ? 'Resume' : 'Pause'}
        </StyledButton>
      </Wrapper>
    </StyledGameStatus>
  );
};

export default GameStatus;
