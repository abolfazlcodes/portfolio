import { render, screen } from '@testing-library/react';
import PageTransition from './PageTransition';
import { expect } from 'vitest';

describe('Page Transition Component Tests', () => {
  it('should render the transition component', () => {
    render(<PageTransition />);

    const transitionEl = screen.getByTestId(
      'element-transition'
    );

    expect(transitionEl).toBeInTheDocument();
  });
});
