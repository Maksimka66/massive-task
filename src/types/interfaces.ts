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
} from "react-hook-form";

export interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    type?: "password" | "email" | "checkbox";
    placeholder?: string;
    label?: string | ReactNode;
    id?: string;
    register?: UseFormRegisterReturn;
    containerStyle?: string;
    inputStyle?: string;
    labelStyle?: string;
    error?: string | FieldError;
}

export interface ISignUpFormData extends FieldValues {
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
}

export interface ISignUpFormProps {
    register: UseFormRegister<ISignUpFormData>;
    handleSubmit: FormEventHandler<HTMLFormElement>;
    errors: FieldErrors<ISignUpFormData>;
}

export interface IButtonStyles extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    type?: "submit" | "reset" | "button";
    className?: string;
}
