import React from "react";
import Navbar from "../Navbar";
import Searchbar from "../Searchbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const RootLayOut = () => {
    return (
        <>
            <Navbar />
            <Searchbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default RootLayOut;
