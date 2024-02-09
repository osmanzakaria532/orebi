import React from "react";

import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import GoogleMap from "../components/components-layer/GoogleMap";

const Contacts = () => {
    return (
        <>
            <div>
                <Container>
                    <Bredcumd />
                    <div className="w-1/2">
                        <h2 className="mb-[42px] font-bold text-[39px]">
                            Fill up a Form
                        </h2>
                        <form action="" className="flex flex-col gap-[23px]">
                            <div className="flex flex-col gap-[10px]">
                                <label
                                    htmlFor=""
                                    className="text-base text-black font-bold leading-[23px]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your name here"
                                    className="border-b focus:outline-none pb-[17px]"
                                />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <label
                                    htmlFor=""
                                    className="text-base text-black font-bold leading-[23px]">
                                    Email
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your email here"
                                    className="border-b focus:outline-none pb-[17px]"
                                />
                            </div>
                            <div className="flex flex-col gap-[10px]">
                                <label
                                    htmlFor=""
                                    className="text-base text-black font-bold leading-[23px]">
                                    Massage
                                </label>
                                <textarea
                                    name=""
                                    id=""
                                    cols="104"
                                    rows="6"
                                    placeholder="Your massage here"
                                    className="border-b focus:outline-none"></textarea>
                            </div>
                            <div className="mt-[30px]">
                                <button className="text-white capitalize bg-[#262626] py-4 px-[85px]">
                                    post
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="mt-[140px]">
                        <GoogleMap />
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Contacts;
