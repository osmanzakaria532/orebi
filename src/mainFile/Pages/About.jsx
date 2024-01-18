import React, { useState } from "react";
import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import Image from "../components/components-layer/Image";

const About = () => {
    const [paragraphItem, setParagraphItem] = useState([
        {
            title: "Our Vision",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            title: "Our Vision",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            title: "Our Vision",
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an   printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ]);
    return (
        <>
            <div>
                <Container className="px-3">
                    <Bredcumd />
                    <div className="flex justify-between gap-10">
                        <div className="w-[780px] h-[776px] bg-[url('../../../src/assets/pro_9.jpg')] bg-no-repeat bg-center bg-cover flex justify-center items-end pb-[62px] cursor-pointer">
                            <button className="py-[27px] px-[97px] bg-Primary_1 text-white font-DM font-bold text-base">
                                Our Brands
                            </button>
                        </div>
                        <div className="w-[780px] h-[776px] bg-[url('../../../src/assets/pro_8.jpg')] bg-no-repeat bg-center bg-cover flex justify-center items-end pb-[62px] cursor-pointer">
                            <button className="py-[27px] px-[97px] bg-Primary_1 text-white font-DM font-bold text-base">
                                Our Stores
                            </button>
                        </div>
                    </div>
                    <div className="mt-[128px] mb-[118px]">
                        <p className="text-Primary_1 text-[39px] font-DM leading-[52px]">
                            Orebi is one of the world's leading ecommerce brands
                            and is internationally recognized for celebrating
                            the essence of classic Worldwide cool looking style.
                        </p>
                    </div>
                    <div className="flex gap-10">
                        {paragraphItem.length != 0 &&
                            paragraphItem.map((value, index) => (
                                <div className="w-[507px]">
                                    <h2 className="text-Primary_1 text-[25px] font-DM font-bold leading-9 mb-[11px]">
                                        {value.title}
                                    </h2>
                                    <p className="text-color_1 text-base font-DM leading-[30px]">
                                        {value.description}
                                    </p>
                                </div>
                            ))}
                    </div>
                </Container>
            </div>
        </>
    );
};

export default About;
