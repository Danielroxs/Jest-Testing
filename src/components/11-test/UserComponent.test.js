import React from "react";
import { render } from "@testing-library/react";
import UserComponent from "./UserComponent";

test("should match the snapshot", () => {
    const user = { name: "John Doe", email: "johndoe@example.com" };
    const { asFragment } = render(<UserComponent user={user} />);
    expect(asFragment()).toMatchSnapshot();
});