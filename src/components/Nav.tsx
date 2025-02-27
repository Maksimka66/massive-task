import { Link } from "react-router-dom";
import ProductsLink from "./ProductsLink";

export default function Nav() {
    return (
        <div>
            <Link to="/">Home</Link>
            <ProductsLink />
        </div>
    );
}
