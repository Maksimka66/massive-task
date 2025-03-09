import { Link } from "react-router-dom";
import { getProducts } from "../../data/data";

export default function Products() {
    const data = getProducts();

    return (
        <section>
            <h2>Products</h2>
            <ul>
                {data.map((item) => (
                    <li key={item.id}>
                        <Link to={`/products/${item.id}`}>
                            Product {item.name} number{item.id}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
