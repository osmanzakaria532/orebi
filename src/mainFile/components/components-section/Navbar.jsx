// import React from 'react'
import List from "../components-layer/List";
import LiItem from "../components-layer/LiItem";
import Image from "../components-layer/Image";
import Container from "../components-layer/Container";

import { useEffect } from "react";
import { FaBars } from "react-icons/fa";

import n_logo from "../../../../src/assets/logo.png";

const Navbar = () => {
    {
        /* ata navbarer barer jonno bananu hoyeche */
    }

    useEffect(() => {
        function navToggle() {
            let navlist = document.querySelector(".navlist");
            navlist.classList.toggle("show");
        }

        let navBtn = document.querySelector(".navBtn");
        navBtn.addEventListener("click", () => {
            navToggle();
        });

        return () => {
            let navBtn = document.querySelector(".navBtn");
            navBtn.addEventListener("click", () => {
                navToggle();
            });
        };
    });

    return (
        <>
            <nav className="bg-white">
                <Container className="md:max-w-container mx-auto py-5 md:py-8 px-3 flex items-center justify-between relative">
                    <Image href="#" src={n_logo} alt="logo" />

                    <List className="navlist opacity-0 md:opacity-100 invisible md:visible gap-x-10 absolute left-0 top-full md:static flex-col md:flex-row bg-slate-400 md:bg-transparent w-full md:w-auto  text-center hover:bg-red-400 md:hover:bg-transparent z-50">
                        <LiItem
                            liInnerContent="home"
                            className="!text-[#262626]"
                        />
                        <LiItem
                            liInnerContent="shop"
                            className="text-[#767676] hover:text-[#262626]"
                        />
                        <LiItem
                            liInnerContent="about"
                            className="text-[#767676] hover:text-[#262626]"
                        />
                        <LiItem
                            liInnerContent="Contacts"
                            className="text-[#767676] hover:text-[#262626]"
                        />
                        <LiItem
                            liInnerContent="Journal"
                            className="text-[#767676] hover:text-[#262626]"
                        />
                    </List>
                    <List>
                        <LiItem
                            liInnerContent="EN"
                            liClassName="text-[#262626] text-sm font-DM font-bold"
                        />
                        <LiItem
                            liInnerContent="RU"
                            liClassName="ml-[20px] text-[#767676] text-sm font-DM"
                        />
                    </List>

                    <div className="md:hidden block">
                        <FaBars className="md:hidden block cursor-pointer navBtn" />
                    </div>
                </Container>
            </nav>
        </>
    );
};

export default Navbar;
