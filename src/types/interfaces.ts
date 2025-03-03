import { InputHTMLAttributes, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    type: "password" | "email" | "checkbox";
    placeholder: string;
    label: string | ReactNode;
    id: string;
    error?: string;
    register: UseFormRegisterReturn;
    containerStyle?: string;
    inputStyle?: string;
    labelStyle?: string;
}

export interface ISignUpForm {
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

export interface IButtonStyles {
    children: ReactNode;
    type: "submit" | "reset" | "button";
    className: string;
}
