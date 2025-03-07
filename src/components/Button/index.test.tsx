import { render, screen } from "@testing-library/react";
import Button from "./index";

describe("Button Component", () => {
    it("Should render component with correct text", () => {
        render(<Button>Click Me</Button>);

        const button = screen.getByRole("button", { name: "Click Me" });
        expect(button).toBeInTheDocument();
    });
});
