import React from "react";

const ProductTag = ({ tagClassName, children }) => {
    return (
        <>
            <div
                className={`absolute top-5 left-5 leading-[35px] bg-[#262626] text-center text-white font-DM font-bold ${tagClassName}`}>
                {children}
            </div>
        </>
    );
};

export default ProductTag;
