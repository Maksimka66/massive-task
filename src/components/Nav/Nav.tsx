import { Link } from "react-router-dom";
import ProductsLink from "../ProductsLink/ProductsLink";

import styles from "./Nav.module.scss";

export default function Nav() {
    return (
        <div className={styles.nav__container}>
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <ProductsLink />
        </div>
    );
}
