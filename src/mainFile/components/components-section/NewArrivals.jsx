import React from "react";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

import ContainerFluid from "../components-layer/ContainerFluid";
import Container from "../components-layer/Container";
import Product from "../components-layer/Product";
import HeadingTag from "../components-layer/HeadingTag";

import nai_1 from "../../../../src/assets/n_i_1.jpg";
import nai_2 from "../../../../src/assets/n_i_2.jpg";
import nai_3 from "../../../../src/assets/n_i_3.jpg";
import nai_4 from "../../../../src/assets/n_i_4.jpg";

const NewArrivalsCopy = () => {
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className="w-16 h-16 bg-[#c7c7c7] rounded-full z-10 absolute top-1/2 translate-y-[-100%] left-[21px] cursor-pointer"
                onClick={onClick}>
                <div className="flex justify-center items-center h-full">
                    <BsArrowLeft className=" text-[12px]" />
                </div>
            </div>
        );
    }

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className="w-16 h-16 bg-[#c7c7c7] rounded-full z-10 absolute top-1/2 translate-y-[-100%] right-[21px] cursor-pointer"
                onClick={onClick}>
                <div className="flex justify-center items-center h-full">
                    <BsArrowRight className=" text-[12px]" />
                </div>
            </div>
        );
    }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <ContainerFluid>
                <Container className="px-3">
                    <HeadingTag children="new arrivals" />
                    <Slider {...settings} className="newArrives md:mx-[-20px]">
                        <div>
                            <Product
                                productImg={nai_1}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={nai_2}
                                tagInnerContent="Old"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={nai_3}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                                // tagTitle="New"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={nai_4}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                                // tagTitle="Old"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={nai_2}
                                tagInnerContent="Old"
                                tagClassName="w-[92px] h-[35px]"
                                // tagTitle="Old"
                            />
                        </div>
                    </Slider>
                </Container>
            </ContainerFluid>
        </>
    );
};

export default NewArrivalsCopy;
