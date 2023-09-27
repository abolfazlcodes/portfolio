import { render, screen } from '@testing-library/react';
import Loader from './Loader';
import { expect } from 'vitest';

describe('Loader Component Tests', () => {
  it('should render the loader component, title and role elements properly', () => {
    render(<Loader />);

    const sectionEl = screen.getByTestId('section-element');
    const titleEl = screen.getByTestId('element-title');
    const roleEl = screen.getByTestId('element-role');

    expect(sectionEl).toBeInTheDocument();

    expect(titleEl).toBeInTheDocument();
    expect(titleEl.textContent).toEqual('abolfazl jamshidi');

    expect(roleEl).toBeInTheDocument();
    expect(roleEl.textContent).toEqual('> Front-end developer');
  });
});
