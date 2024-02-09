import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import LeftSideItemInner from "./LeftSideItemInner";

const LeftSideItem = ({ icon }) => {
    let [angle, setAngle] = useState(icon);
    let [show, setShow] = useState(true);

    return (
        <>
            {angle ? (
                <div>
                    <div
                        className="flex items-center justify-between border p-2 m-1"
                        onClick={() => setShow(!show)}>
                        <h2>LeftSideItem</h2>
                        <FaAngleDown
                            className={
                                show == true
                                    ? "rotate-0 transition-all duration-300"
                                    : "rotate-[-90deg] transition-all duration-300"
                            }
                        />
                    </div>
                    {show && (
                        <>
                            <LeftSideItemInner icon={false} />
                            <LeftSideItemInner icon={true} />
                            <LeftSideItemInner icon={false} />
                        </>
                    )}
                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-between border p-2 m-1">
                        <h2>LeftSideItem</h2>
                    </div>
                    <>
                        <LeftSideItemInner icon={false} />
                        <LeftSideItemInner icon={true} />
                        <LeftSideItemInner icon={false} />
                    </>
                </div>
            )}
        </>
    );
};

export default LeftSideItem;
