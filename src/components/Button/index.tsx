import clsx from "clsx";

import { IButtonStyles } from "../../types/interfaces";

import "./styles.scss";

export default function Button({
    children,
    type = "button",
    className,
    ...props
}: IButtonStyles) {
    return (
        <button className={clsx("button", className)} type={type} {...props}>
            {children}
        </button>
    );
}
