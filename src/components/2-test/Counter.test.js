import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe("Counter component", () => {
    it("increments the counter when the button is clicked", () => {
        // Renderizar el componente
        render(<Counter />);

        // Obtener los elementos
        const counterText = screen.getByText(/Current Count:/i);
        const button = screen.getByRole('button', { name: /increment/i });

        // Verificar que el contador comienza en 0
        expect(counterText).toHaveTextContent("Current Count: 0");

        // Hacer clic en el botón
        fireEvent.click(button);

        // Verificar que el contador ahora es 1
        expect(counterText).toHaveTextContent("Current Count: 1");
    });
});
