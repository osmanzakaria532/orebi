import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const Bredcumd = () => {
    return (
        <>
            <div className="py-32">
                <h2 className="text-Primary_1 text-[49px] font-DM font-bold first-letter:uppercase">
                    {window.location.pathname.split("/")[1]}
                </h2>
                <p className="flex items-center text-color_1 text-xs font-DM">
                    Home <FaAngleRight className="mx-[7px]" />
                    <p className="first-letter:uppercase">
                        {window.location.pathname.split("/")[1]}
                    </p>
                </p>
            </div>
        </>
    );
};

export default Bredcumd;
