import clsx from "clsx";

import { IFieldProps } from "../../types/interfaces";

import "./styles.scss";

export default function Input({
    type,
    placeholder,
    label,
    error,
    register,
    id,
    containerStyle,
    inputStyle,
    labelStyle,
}: IFieldProps) {
    return (
        <div className={clsx("input", containerStyle)}>
            <label htmlFor={id} className={clsx("input__label", labelStyle)}>
                {label}
            </label>
            <input
                className={clsx("input__field", inputStyle)}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error && <span className="input__error">{String(error)}</span>}
        </div>
    );
}
