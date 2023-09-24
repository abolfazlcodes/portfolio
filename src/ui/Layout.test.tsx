import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

test('Pages Router', () => {
  render(<Index />);
  const headline = screen.getByText(/hello world/i);
  expect(headline).toBeInTheDocument();
});
