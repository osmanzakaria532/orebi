import React from "react";
import Banner from "../components/components-section/Banner";
import Ads from "../components/components-section/Ads";
import NewArrivals from "../components/components-section/NewArrivals";
import OurBestsellers from "../components/components-section/OurBestsellers";
import Ads2 from "../components/components-section/Ads2";
import SpecialOffers from "../components/components-section/SpecialOffers";

const Home = () => {
    return (
        <>
            <Banner />
            <Ads />
            <NewArrivals />
            <OurBestsellers />
            <Ads2 />
            <SpecialOffers />
        </>
    );
};

export default Home;
