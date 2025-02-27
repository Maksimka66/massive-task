import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";

import "./App.css";

function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
