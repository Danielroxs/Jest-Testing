import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DataFetcher from './DataFetcher';

describe("DataFetcher", () => {
    beforeEach(() => {
        global.fetch = jest.fn()
    })

    test('loads and displays data', async () => {
        global.fetch.mockResolvedValueOnce({
            json: () => Promise.resolve({ info: 'Test data' })
        })

        render(<DataFetcher apiUrl="/fake-api" />)
        await waitFor(() => screen.getByText(/Data: Test data/))

        expect(screen.getByText(/Data: Test data/)).toBeInTheDocument()
    })

    test('handles fetch error', async () => {
        global.fetch.mockRejectedValueOnce(new Error('Failed to fetch data'))

        render(<DataFetcher apiUrl="/fake-api" />)
        await waitFor(() => screen.getByText(/Failed to fetch data/))

        expect(screen.getByText(/Failed to fetch data/)).toBeInTheDocument()
    })
})