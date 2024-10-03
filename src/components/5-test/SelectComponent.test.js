import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SelectComponent from './SelectComponent';

describe("SelectComponent", () => {
    test('updates the state when an option is selected', () => {
        render(<SelectComponent />);
        const select = screen.getByRole('combobox');
        const option2 = screen.getByRole('option', { name: /Opción 2/i });

        fireEvent.change(select, { target: { value: 'option2' } });

        expect(select.value).toBe('option2');
        expect(screen.getByText("Seleccionado: option2")).toBeInTheDocument();
    })
})