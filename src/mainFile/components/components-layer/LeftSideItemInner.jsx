import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import LeftSubCat from "./LeftSubCat";

const LeftSideItemInner = ({ icon }) => {
    let [show, setShow] = useState(false);
    let [plus, setPlus] = useState(icon);

    return (
        <>
            {plus ? (
                <div>
                    <div
                        onClick={() => setShow(!show)}
                        className="flex items-center justify-between p-2 m-2 border relative">
                        <p>abcd</p>
                        <div>
                            {/* {show ? <FaMinus /> : <FaPlus />} ata ak doren system */}
                            <FaMinus
                                className={
                                    show
                                        ? "absolute top-1/2 -translate-y-1/2 right-2 opacity-100 transition-all duration-300"
                                        : "absolute top-1/2 -translate-y-1/2 right-2 opacity-0 transition-all duration-300"
                                }
                            />
                            <FaPlus
                                className={
                                    show
                                        ? "absolute top-1/2 -translate-y-1/2 right-2 opacity-0 transition-all duration-300"
                                        : "absolute top-1/2 -translate-y-1/2 right-2 opacity-100 transition-all duration-300"
                                }
                            />
                        </div>
                    </div>
                    {show && (
                        <>
                            <LeftSubCat />
                        </>
                    )}
                </div>
            ) : (
                <div>
                    <div className="flex items-center justify-between p-2 m-2 border">
                        <p>abcd</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default LeftSideItemInner;
