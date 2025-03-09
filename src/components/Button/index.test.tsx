import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button from "./index";

describe("Button Component", () => {
    it("should render component with correct text", () => {
        render(<Button>Click Me</Button>);

        const button = screen.getByRole("button", { name: "Click Me" });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("button");
        expect(button).toHaveAttribute("type", "button");
    });

    it("should render with custom class name", () => {
        render(<Button className="abc">Click Me</Button>);

        const button = screen.getByRole("button", { name: "Click Me" });
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass("abc");
    });

    it("should handle clicks", async () => {
        const handleClick = jest.fn();

        render(<Button onClick={handleClick}>Click me</Button>);

        const button = screen.getByRole("button", { name: "Click me" });

        await userEvent.click(button);

        expect(button).toBeInTheDocument();
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
