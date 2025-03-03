import { IFieldProps } from "../../types/interfaces";

import styles from "./Input.module.scss";

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
        <div className={`${styles.inputContainer} ${containerStyle}`}>
            <label
                htmlFor={id}
                className={`${styles.field__label} ${labelStyle}`}
            >
                {label}
            </label>
            <input
                className={`${styles.field} ${inputStyle}`}
                id={id}
                type={type}
                placeholder={placeholder}
                {...register}
            />
            {error && <span className={styles.errorMessage}>{error}</span>}
        </div>
    );
}
