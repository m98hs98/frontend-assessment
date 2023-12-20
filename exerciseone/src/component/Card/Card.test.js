import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Card from './Card';

describe('Card', () => {
  it('renders the card component', () => {
    render(<Card />);
    expect(screen.getByAltText('...')).toBeInTheDocument();
  });

//   it('displays the correct footer text', () => {
//     render(<Card />);
//     expect(screen.getByText('Powered by HTML.COM')).toBeInTheDocument();
//   });

//   it('displays the read more button', () => {
//     render(<Card />);
//     expect(screen.getByRole('link', { name: /read more/i })).toBeInTheDocument();
//   });

});
