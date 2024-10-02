import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe("Button", () => {
    it("renders the label", () => {
        render(<Button label="Click me" />);
        const button = screen.getByRole("button");
        expect(button).toHaveTextContent("Click me");
    });
});
