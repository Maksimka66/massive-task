import * as yup from "yup";

export const SchemaSignUp = yup.object().shape({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(50, "Password must be at most 50 characters")
        .required("Password is required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required("Confirm Password is required"),
    acceptTerms: yup
        .boolean()
        .oneOf([true], "You should accept the terms first!")
        .required(),
});
