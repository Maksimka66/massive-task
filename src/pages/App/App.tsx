import { Route, Routes } from "react-router-dom";

import Home from "../Home/Home";
import Products from "../Products/Products";
import Product from "../Product/Product";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import Nav from "../../components/Nav/Nav";

import "./App.css";
import SignIn from "../SignIn/SignIn";

function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<Product />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
