// import React from 'react'
import { Route, Routes } from "react-router-dom";
import RootLayOut from "./mainFile/components/components-section/root-layout/RootLayOut";
import Home from "./mainFile/Pages/Home";
import Shop from "./mainFile/Pages/Shop";
import About from "./mainFile/Pages/About";

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<RootLayOut />}>
                    <Route index element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>

            {/* <Home /> */}
        </>
    );
};

export default App;
