import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { UserProvider } from "./UserContext"
import UserProfile from "./UserProfile";

describe("UserProfile", () => {
    test('displays user information and logs out', () => {
        render(
            <UserProvider>
                <UserProfile />
            </UserProvider>
        )

        fireEvent.click(screen.getByText('Logout'))

        expect(screen.getByText('No user logged in')).toBeInTheDocument()
    })
})