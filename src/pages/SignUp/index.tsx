import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import SignUpForm from "../../components/SignUpForm";
import { ISignUpForm } from "../../types/interfaces";
import { SchemaSignUp } from "../../components/SignUpForm/SignUpSchema";

import "./styles.scss";

export default function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISignUpForm<FieldValues>>({
        mode: "onSubmit",
        resolver: yupResolver(SchemaSignUp),
    });

    const submitForm: SubmitHandler<ISignUpForm<FieldValues>> = async (
        data
    ) => {
        console.log(data);
    };

    return (
        <div className="signUpPage">
            <SignUpForm
                register={register}
                handleSubmit={handleSubmit(submitForm)}
                errors={errors}
            />
        </div>
    );
}
