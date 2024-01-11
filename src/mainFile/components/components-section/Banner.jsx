import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import ContainerFluid from "../components-layer/ContainerFluid";
import Container from "../components-layer/Container";
import Image from "../components-layer/Image";

import banner_1 from "../../../../src/assets/banner.jpg";
import banner_2 from "../../../../src/assets/banner_2.jpg";
import banner_3 from "../../../../src/assets/banner_3.jpg";

// import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        appendDots: (dots) => (
            <div
                style={{
                    margin: "0px",
                    position: "absolute",
                    left: "160px",
                    top: "50%",
                    transform: "translateY(-50%)",
                }}>
                <ul> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    height: "30px",
                    width: "22px",
                    paddingRight: "10px",
                    borderRight: "2px white solid",
                    fontSize: "0",
                    lineHeight: "30px",
                    color: "#262626",
                }}>
                0{i + 1}
            </div>
        ),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    appendDots: (dots) => (
                        <div
                            style={{
                                margin: "0px",
                                position: "absolute",
                                left: "50%",
                                bottom: "0",
                                transform: "translate(-50%, -30%)",
                            }}>
                            <ul className="flex"> {dots} </ul>
                        </div>
                    ),
                    customPaging: (i) => (
                        <div
                            style={{
                                height: "30px",
                                width: "22px",
                                paddingBottom: "10px",
                                borderBottom: "2px white solid",
                                fontSize: "0",
                                lineHeight: "30px",
                                color: "#262626",
                                textAlign: "center",
                            }}>
                            0{i + 1}
                        </div>
                    ),
                },
            },
        ],
    };
    return (
        <>
            <ContainerFluid className="banner">
                <Slider {...settings}>
                    <div>
                        <Image className="w-full" src={banner_1} />
                    </div>
                    <div>
                        <Image className="w-full" src={banner_2} />
                    </div>
                    <div>
                        <Image className="w-full" src={banner_3} />
                    </div>
                </Slider>
            </ContainerFluid>
            <ContainerFluid className="py-2 md:py-8 border border-[#F0F0F0] hidden sm:block">
                <Container className="flex flex-wrap justify-between items-center px-3 gap-x-[4px] gap-y-2">
                    <div>
                        <p className="flex gap-x-4 items-center">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="14"
                                    height="20"
                                    viewBox="0 0 14 20"
                                    fill="none">
                                    <path
                                        d="M0.44043 20V17.396C1.6351 16.4066 2.79709 15.4266 3.92643 14.456C5.05577 13.4853 6.06376 12.524 6.95043 11.572C7.8371 10.62 8.54643 9.6913 9.07843 8.78596C9.61043 7.88063 9.87643 6.99864 9.87643 6.13997C9.87643 5.33729 9.6571 4.62797 9.21843 4.01196C8.77976 3.39596 8.05643 3.08796 7.04843 3.08796C6.02176 3.08796 5.2471 3.42396 4.72443 4.09596C4.20176 4.76797 3.94043 5.57996 3.94043 6.53196H0.46843C0.505763 5.09462 0.823093 3.8953 1.42043 2.93396C2.01777 1.97263 2.81109 1.25397 3.80043 0.777965C4.78977 0.301962 5.90042 0.0639648 7.13243 0.0639648C9.12977 0.0639648 10.6838 0.609959 11.7944 1.70196C12.9051 2.79397 13.4604 4.20796 13.4604 5.94396C13.4604 7.02664 13.2131 8.08129 12.7184 9.10796C12.2238 10.1346 11.5751 11.124 10.7724 12.076C9.96976 13.028 9.10177 13.9193 8.16843 14.75C7.23509 15.5806 6.32977 16.3506 5.45243 17.06H13.9364V20H0.44043Z"
                                        fill="#262626"
                                    />
                                </svg>
                            </span>
                            Two years warranty
                        </p>
                    </div>
                    <div>
                        <p className="flex gap-x-4 items-center">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="20"
                                    viewBox="0 0 25 20"
                                    fill="none">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M23.75 13.75H24.375C24.7188 13.75 25 14.0312 25 14.375V15.625C25 15.9688 24.7188 16.25 24.375 16.25H22.5C22.5 18.3203 20.8203 20 18.75 20C16.6797 20 15 18.3203 15 16.25H10C10 18.3203 8.32031 20 6.25 20C4.17969 20 2.5 18.3203 2.5 16.25H1.875C0.839844 16.25 0 15.4102 0 14.375V1.875C0 0.839844 0.839844 0 1.875 0H14.375C15.4102 0 16.25 0.839844 16.25 1.875V3.75H17.9727C18.4688 3.75 18.9453 3.94922 19.2969 4.30078L23.1992 8.20312C23.5508 8.55469 23.75 9.03125 23.75 9.52734V13.75ZM4.375 16.25C4.375 17.2852 5.21484 18.125 6.25 18.125C7.28516 18.125 8.125 17.2852 8.125 16.25C8.125 15.2148 7.28516 14.375 6.25 14.375C5.21484 14.375 4.375 15.2148 4.375 16.25ZM18.75 18.125C17.7148 18.125 16.875 17.2852 16.875 16.25C16.875 15.2148 17.7148 14.375 18.75 14.375C19.7852 14.375 20.625 15.2148 20.625 16.25C20.625 17.2852 19.7852 18.125 18.75 18.125ZM16.25 10H21.875V9.52734L17.9727 5.625H16.25V10Z"
                                        fill="#262626"
                                    />
                                </svg>
                            </span>
                            Two years warranty
                        </p>
                    </div>
                    <div>
                        <p className="flex gap-x-2 md:gap-x-4 items-center">
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none">
                                    <path
                                        d="M9.98165 1.62584e-05C7.30952 0.00481465 4.88335 1.0578 3.09214 2.76957L1.65206 1.32949C1.04238 0.719815 0 1.15159 0 2.01377V7.41937C0 7.95385 0.433266 8.38711 0.967742 8.38711H6.37335C7.23552 8.38711 7.6673 7.34473 7.05766 6.73506L5.37419 5.05159C6.61871 3.88631 8.22907 3.24082 9.93992 3.22606C13.6656 3.19389 16.8062 6.20901 16.774 10.0584C16.7434 13.7101 13.7829 16.7742 10 16.7742C8.34165 16.7742 6.77431 16.1824 5.53911 15.0986C5.34786 14.9308 5.05903 14.941 4.87911 15.1209L3.27984 16.7201C3.08339 16.9166 3.0931 17.2369 3.29927 17.4231C5.0725 19.0247 7.42234 20 10 20C15.5228 20 20 15.5229 20 10.0001C20 4.48361 15.4981 -0.00986277 9.98165 1.62584e-05Z"
                                        fill="#262626"
                                    />
                                </svg>
                            </span>
                            Two years warranty
                        </p>
                    </div>
                </Container>
            </ContainerFluid>
        </>
    );
};

export default Banner;
