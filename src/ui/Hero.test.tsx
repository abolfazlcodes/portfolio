import { render, screen } from '@testing-library/react';
import Hero from './Hero';
import { expect } from 'vitest';

describe('Hero Component Tests', () => {
  it('should render the hero component properly', () => {
    render(<Hero />);

    const headerEl = screen.getByTestId('element-header');

    expect(headerEl).toBeInTheDocument();
  });

  it('should render the hero title name and role properly', () => {
    render(<Hero />);

    const titleEl = screen.getByTestId('element-title');
    const roleEl = screen.getByTestId('element-role');

    expect(titleEl).toBeInTheDocument();
    expect(titleEl.textContent).toEqual('abolfazl jamshidi');

    expect(roleEl).toBeInTheDocument();
    expect(roleEl.textContent).toEqual('> Front-end developer');
  });

  it('should render the link to github profile page', () => {
    const code =
      'const githublink = "https://github.com/abolfazlcodes"';

    render(<Hero />);

    const githubProfileLinkEl = screen.getByRole('link', {
      name: /const githublink/i,
    });

    expect(githubProfileLinkEl).toBeInTheDocument();
    expect(githubProfileLinkEl.textContent).toEqual(code);
  });
});
