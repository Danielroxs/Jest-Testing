import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

describe("InputField Component", () => {
    test("updates value as user types", () => {
        render(<InputField />);
        const input = screen.getByPlaceholderText("Escribe algo aquí"); // Encuentra el input por su placeholder
        fireEvent.change(input, { target: { value: 'Hola' } }); // Simula escribir 'Hola' en el input
        expect(input.value).toBe('Hola'); // Verifica que el valor del input es 'Hola'
        expect(screen.getByText("Texto actual: Hola")).toBeInTheDocument(); // Verifica que el párrafo también muestra el texto
    });
});
