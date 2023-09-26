import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import { expect } from 'vitest';
import { navigationLinks } from '@/constants';

describe('Navbar Component Tests', () => {
  it('should render the title for logo component', () => {
    render(<Navbar />);
    const logoHeader = screen.getByTestId('logo-header');

    expect(logoHeader).toBeInTheDocument();
    expect(logoHeader.textContent).toEqual('abolfazl-jamshidi');
  });

  it('should render the navbar lit wrapper and should have 3 li items', () => {
    render(<Navbar />);

    const ulListWrapper = screen.getByTestId('list-element');
    const liElements = screen.getAllByRole('listitem');

    expect(ulListWrapper).toBeInTheDocument();
    expect(liElements.length).toEqual(navigationLinks.length);

    liElements.forEach((item, index) => {
      expect(item.textContent).toEqual(
        navigationLinks[index].title
      );
    });
  });

  it('should display a contact-me link button', () => {
    render(<Navbar />);

    const contactMeLink = screen.getByRole('link', {
      name: /contact/i,
    });

    expect(contactMeLink).toBeInTheDocument();
    expect(contactMeLink.getAttribute('href')).toBe(
      '/contact-me'
    );
  });
});
