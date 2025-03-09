import {
    ButtonHTMLAttributes,
    FormEventHandler,
    InputHTMLAttributes,
    ReactNode,
} from "react";
import {
    UseFormRegister,
    FieldValues,
    UseFormRegisterReturn,
    FieldErrors,
    FieldError,
    FieldErrorsImpl,
    Merge,
} from "react-hook-form";

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: "password" | "email" | "checkbox";
    placeholder?: string;
    label?: string | ReactNode;
    id?: string;
    error?:
        | string
        | FieldError
        | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
    register?: UseFormRegisterReturn;
    containerStyle?: string;
    inputStyle?: string;
    labelStyle?: string;
}

export interface ISignUpForm<T extends FieldValues> {
    register: UseFormRegister<T>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    errors: FieldErrors<T>;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

export interface IButtonStyles extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    className?: string;
}
