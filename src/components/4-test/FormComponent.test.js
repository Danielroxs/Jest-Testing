import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormComponent from './FormComponent';

describe(" FormComponent", () => {
    test("handles form submission correctly", () => {
        render(<FormComponent />);
        const input = screen.getByPlaceholderText("Escribe algo");
        const button = screen.getByRole("button", { name: /submit/i })

        fireEvent.change(input, { target: { value: 'Test' } })
        fireEvent.click(button)

        expect(screen.getByText("Submitted!")).toBeInTheDocument()
    })
})