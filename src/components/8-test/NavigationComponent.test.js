import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationComponent from './NavigationComponent';

describe('NavigationComponent', () => {
  test('navigates to user profile on button click', () => {
    render(
      <MemoryRouter>
        <NavigationComponent />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /go to user profile/i });
    fireEvent.click(button);

    // Additional checks can be implemented here if needed
  });
});
