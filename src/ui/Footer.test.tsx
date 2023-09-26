import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { expect } from 'vitest';

describe('Footer Component Tests', () => {
  it('should render the footer properly', () => {
    render(<Footer />);

    const footer = screen.getByTestId('element-footer');

    expect(footer).toBeInTheDocument();
  });

  it('should render the footer header properly', () => {
    render(<Footer />);

    const footerHeader = screen.getByTestId(
      'element-footer-header'
    );

    expect(footerHeader).toBeInTheDocument();
    expect(footerHeader.textContent).toEqual('find me in:');
  });

  it('should render the footer list element with list items properly', () => {
    render(<Footer />);

    const footerList = screen.getByTestId('element-footer-list');
    const footerListItem = screen.getAllByRole('listitem');

    expect(footerList).toBeInTheDocument();
    expect(footerListItem.length).toBe(3);
  });

  it('should render the footer github username span', () => {
    render(<Footer />);

    const usernameSpan = screen.getByTestId(
      'element-username-span'
    );

    expect(usernameSpan).toBeInTheDocument();
    expect(usernameSpan.textContent).toEqual('@abolfazlcodes');
  });
});
