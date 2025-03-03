import { IButtonStyles } from "../../types/interfaces";

import styles from "./Button.module.scss";

export default function Button({ children, type, className }: IButtonStyles) {
    return (
        <button className={`${styles.button} ${className}`} type={type}>
            {children}
        </button>
    );
}
