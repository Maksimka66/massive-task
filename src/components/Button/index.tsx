import clsx from "clsx";

import { IButtonStyles } from "../../types/interfaces";

import "./styles.scss";

export default function Button({ children, type, className }: IButtonStyles) {
    return (
        <button className={clsx("button", className)} type={type}>
            {children}
        </button>
    );
}
