import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.module.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Products from "./pages/Products";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;
