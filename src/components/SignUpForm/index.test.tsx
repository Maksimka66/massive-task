import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import SignUpForm from "./index";

const mockRegister = jest.fn();
const mockHandleSubmit = jest.fn((callback) => () => callback());
const mockErrors = {
    email: { message: "Email is required", type: "required" },
    password: {
        message: "Password must be at least 8 characters",
        type: "minLength",
    },
    acceptTerms: {
        message: "You should accept the terms first!",
        type: "required",
    },
};

describe("SignUpForm Component", () => {
    it("renders the form fields correctly", () => {
        render(
            <MemoryRouter>
                <SignUpForm
                    register={mockRegister}
                    handleSubmit={mockHandleSubmit}
                    errors={mockErrors}
                />
            </MemoryRouter>
        );

        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByLabelText("Confirm password")).toBeInTheDocument();
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        expect(
            screen.getByRole("button", { name: "Submit" })
        ).toBeInTheDocument();
    });

    it("shows validation errors when fields are empty", async () => {
        render(
            <MemoryRouter>
                <SignUpForm
                    register={mockRegister}
                    handleSubmit={mockHandleSubmit}
                    errors={mockErrors}
                />
            </MemoryRouter>
        );

        fireEvent.click(screen.getByRole("button", { name: "Submit" }));

        await waitFor(() => {
            expect(screen.getByText("Email is required")).toBeInTheDocument();

            const passwordErrors = screen.getAllByText(
                "Password must be at least 8 characters"
            );
            expect(passwordErrors).toHaveLength(2);
            expect(passwordErrors[0]).toBeInTheDocument();
            expect(passwordErrors[1]).toBeInTheDocument();

            expect(
                screen.getByText("You should accept the terms first!")
            ).toBeInTheDocument();
        });
    });

    it("submits the form with valid input values", async () => {
        render(
            <MemoryRouter>
                <SignUpForm
                    register={mockRegister}
                    handleSubmit={mockHandleSubmit}
                    errors={mockErrors}
                />
            </MemoryRouter>
        );

        fireEvent.change(screen.getByLabelText("Email"), {
            target: { value: "test@example.com" },
        });
        fireEvent.change(screen.getByLabelText("Password"), {
            target: { value: "Password123" },
        });
        fireEvent.change(screen.getByLabelText("Confirm password"), {
            target: { value: "Password123" },
        });
        fireEvent.change(screen.getByPlaceholderText(""));

        fireEvent.click(screen.getByRole("button", { name: "Submit" }), {
            target: { value: true },
        });

        await waitFor(() => {
            expect(mockHandleSubmit).toHaveBeenCalled();
        });
    });
});
