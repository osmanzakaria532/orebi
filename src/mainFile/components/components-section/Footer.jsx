import React from "react";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { AiOutlineInstagram } from "react-icons/ai";

import ContainerFluid from "../components-layer/ContainerFluid";
import Container from "../components-layer/Container";
import Image from "../components-layer/Image";
import List from "../components-layer/List";
import LiItem from "../components-layer/LiItem";

import f_logo from "../../../../src/assets/f_logo.png";

const Footer = () => {
    return (
        <>
            <ContainerFluid className="pt-[140px]">
                <div className="bg-[#F5F5F3]">
                    <Container className="pt-[55px] pb-[60px] px-3">
                        <div className="flex justify-between mb-[65px]">
                            <div className="w-[680px] flex gap-x-[143px]">
                                <div>
                                    <h4 className="mb-[17px] text-[#262626] text-base font-DM font-bold leading-[23px] uppercase">
                                        menu
                                    </h4>
                                    <List className="flex-col gap-y-[6px]">
                                        <LiItem
                                            liInnerContent="Home"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Shop"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="About"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Contact"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Journal"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                    </List>
                                </div>
                                <div>
                                    <h4 className="mb-[17px] text-[#262626] text-base font-DM font-bold leading-[23px] uppercase">
                                        shop
                                    </h4>
                                    <List className="flex-col gap-y-[6px]">
                                        <LiItem
                                            liInnerContent="Category 1"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Category 2"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Category 3"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Category 4"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Category 5"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                    </List>
                                </div>
                                <div>
                                    <h4 className="mb-[17px] text-[#262626] text-base font-DM font-bold leading-[23px] uppercase">
                                        help
                                    </h4>
                                    <List className="flex-col gap-y-[6px]">
                                        <LiItem
                                            liInnerContent="Privacy Policy"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Terms & Conditions"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Special E-shop"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Shipping"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                        <LiItem
                                            liInnerContent="Secure Payments"
                                            className="text-[#6D6D6D] font-normal leading-[23px]"
                                        />
                                    </List>
                                </div>
                            </div>
                            <div className="w-[460px]">
                                <div className="text-Primary_1 text-base font-bold landing-[27px] mb-[15px]">
                                    <div>
                                        <Link>(052) 611-5711</Link>
                                    </div>
                                    <div>
                                        <Link>company@domain.com</Link>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-Primary_2 text-sm font-DM leading-[23px]">
                                        575 Crescent Ave. Quakertown, PA 18951
                                    </p>
                                </div>
                            </div>
                            <div className="w-[460px]">
                                <Image
                                    src={f_logo}
                                    alt="logo"
                                    className="!w-auto"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-y-3">
                            <div className="flex justify-center md:justify-start gap-x-6">
                                <Link>
                                    <BiLogoFacebook className="text-[30px]" />
                                </Link>
                                <Link>
                                    <BiLogoLinkedin className="text-[30px]" />
                                </Link>
                                <Link>
                                    <AiOutlineInstagram className="text-[30px]" />
                                </Link>
                            </div>
                            <p className="text-sm text-[#6D6D6D] font-DM text-center md:text-end ">
                                2020 Orebi Minimal eCommerce Figma Template by
                                <Link className="hover:underline">
                                    {" "}
                                    Adveits{" "}
                                </Link>
                            </p>
                        </div>
                    </Container>
                </div>
            </ContainerFluid>
        </>
    );
};

export default Footer;
