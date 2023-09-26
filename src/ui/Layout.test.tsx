import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { expect } from 'vitest';

describe('Layout Component Tests', () => {
  it('should render layout component properly', () => {
    render(<Layout />);

    const layoutWrapper = screen.getByTestId(
      'element-layout-wrapper'
    );
    const layoutMainElement = screen.getByTestId(
      'element-layout-main'
    );

    expect(layoutWrapper).toBeInTheDocument();
    expect(layoutMainElement).toBeInTheDocument();
  });
});
