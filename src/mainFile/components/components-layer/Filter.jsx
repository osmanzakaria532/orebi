import React from "react";

const Filter = ({ className, categoryName, icon }) => {
    return (
        <>
            <li
                className={`flex justify-between items-center border-b py-[21px] text-Primary_2 ${className}`}>
                {categoryName}
                {icon}
            </li>
        </>
    );
};

export default Filter;
