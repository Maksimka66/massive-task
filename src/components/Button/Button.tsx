import { IButtonStyles } from "../../types/interfaces";

import styles from "./Button.module.scss";

export default function Button({
    children,
    type,
    className,
    handler,
}: IButtonStyles) {
    return (
        <button
            className={`${styles.button} ${className}`}
            type={type}
            onSubmit={handler}
        >
            {children}
        </button>
    );
}
