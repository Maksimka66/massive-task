import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Input from "./index";

describe("Input component", () => {
    it("should render component with correct text", async () => {
        const handleChange = jest.fn();

        render(<Input placeholder="Enter your name" onChange={handleChange} />);

        const input = screen.getByPlaceholderText("Enter your name");

        await userEvent.type(input, "Hello, World!");

        expect(input).toBeInTheDocument();
        expect(input).toHaveValue("Hello, World!");
    });
});
