import { Link } from "react-router-dom";
import ProductsLink from "../ProductsLink";

import "./styles.scss";

export default function Nav() {
    return (
        <div className="nav__container">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <ProductsLink />
        </div>
    );
}
