import { Route, Routes } from "react-router-dom";

import Home from "../Home";
import Products from "../Products";
import Product from "../Product";
import SignUp from "../SignUp";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import Nav from "../../components/Nav";

import "./App.css";

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
