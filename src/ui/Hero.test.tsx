import { render, screen, waitFor } from '@testing-library/react';
import Hero from './Hero';
import { expect } from 'vitest';
import { CODE_LINK } from '@/constants';

describe('Hero Component Tests', () => {
  it('should render the hero component properly', () => {
    render(<Hero />);

    const headerEl = screen.getByTestId('element-header');

    expect(headerEl).toBeInTheDocument();
  });

  it('should render the hero title name and role properly', async () => {
    render(<Hero />);

    const titleEl = screen.getByTestId('element-title');
    const roleEl = screen.getByTestId('element-role');

    expect(titleEl).toBeInTheDocument();
    await waitFor(() => {
      expect(titleEl).toHaveTextContent('a');
    });

    expect(roleEl).toBeInTheDocument();
    await waitFor(() => {
      expect(roleEl).toHaveTextContent('> Front');
    });
  });

  it('should render the link to github profile page', () => {
    render(<Hero />);

    const githubProfileLinkEl = screen.getByRole('link', {
      name: /const githublink/i,
    });

    expect(githubProfileLinkEl).toBeInTheDocument();
    expect(githubProfileLinkEl.textContent).toEqual(CODE_LINK);
  });
});
