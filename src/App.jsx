// import React from 'react'
import { Route, Routes } from "react-router-dom";
import RootLayOut from "./mainFile/components/components-section/root-layout/RootLayOut";
import Home from "./mainFile/Pages/Home";
import Shop from "./mainFile/Pages/Shop";
import About from "./mainFile/Pages/About";
import Contacts from "./mainFile/Pages/Contacts";
import ProductInsideDetails from "./mainFile/Pages/ProductInsideDetails";
import MyAccount from "./mainFile/Pages/MyAccount";
import Login from "./mainFile/Pages/Login";
import SignUp from "./mainFile/Pages/SignUp";
import Cart from "./mainFile/Pages/Cart";
import CheckOut from "./mainFile/Pages/CheckOut";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayOut />}>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                    <Route
                        path="/productinsidedetails/:pId"
                        element={<ProductInsideDetails />}
                    />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/myaccount" element={<MyAccount />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<CheckOut />} />
                </Route>
            </Routes>

            {/* <Home /> */}
        </>
    );
};

export default App;
