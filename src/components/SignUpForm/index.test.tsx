import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import SignUpForm from "./index";

const mockRegister = jest.fn();
const mockHandleSubmit = jest.fn((callback) => callback());
const mockErrors = {};

describe("SignUpForm Component", () => {
    it("renders the form fields correctly", () => {
        render(
            <SignUpForm
                register={mockRegister}
                handleSubmit={mockHandleSubmit}
                errors={mockErrors}
            />
        );

        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByLabelText("Password")).toBeInTheDocument();
        expect(screen.getByLabelText("Confirm password")).toBeInTheDocument();
        expect(screen.getByRole("checkbox")).toBeInTheDocument();
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("shows validation errors when fields are empty", async () => {
        render(
            <SignUpForm
                register={mockRegister}
                handleSubmit={mockHandleSubmit}
                errors={mockErrors}
            />
        );

        fireEvent.click(screen.getByRole("button"));

        await waitFor(() => {
            expect(screen.getByText("Email is required")).toBeInTheDocument();
            expect(
                screen.getByText("Password must be at least 8 characters")
            ).toBeInTheDocument();
            expect(
                screen.getByText("Password must be at least 8 characters")
            ).toBeInTheDocument();
            expect(
                screen.getByText("You should accept the terms first!")
            ).toBeInTheDocument();
        });
    });

    it("submits the form with valid input values", async () => {
        render(
            <SignUpForm
                register={mockRegister}
                handleSubmit={mockHandleSubmit}
                errors={mockErrors}
            />
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

        fireEvent.click(screen.getByRole("button"), {
            target: { value: true },
        });

        await waitFor(() => {
            expect(
                screen.getByText(/successfully submitted/i)
            ).toBeInTheDocument();
        });
    });
});
