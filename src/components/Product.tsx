import { useParams } from "react-router-dom";
import BackLink from "./BackLink";

export default function Product() {
    const { id } = useParams();

    return (
        <div>
            <h2>Product details</h2>
            <p>{id}</p>
            <BackLink />
        </div>
    );
}
