import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from './UserProfile';

// Mockear global.fetch
global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ name: 'John Doe', email: 'john@example.com' }),
    })
);

describe('UserProfile', () => {
    beforeEach(() => {
        fetch.mockClear();  // Limpia el mock antes de cada prueba
    });

    test('displays user data after fetch', async () => {
        render(<UserProfile userId="123" />);

        // Espera a que el componente muestre el nombre del usuario
        await waitFor(() => screen.getByText(/John Doe/i));

        // Verifica que los datos se muestran correctamente
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Email: john@example.com')).toBeInTheDocument();
    });
});
