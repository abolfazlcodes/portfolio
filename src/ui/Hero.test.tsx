import { render } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component Tests', () => {
  it('should render the hero component properly', () => {
    render(<Hero />);
  });
});
