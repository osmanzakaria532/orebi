import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
// import ReactDOM from 'react-dom';

import "../components-layer/paginations.css";
import Product from "./Product";

import pro_1 from "../../../../src/assets/pro_1.jpg";
import pro_2 from "../../../../src/assets/pro_2.jpg";
import pro_3 from "../../../../src/assets/pro_3.jpg";
import pro_4 from "../../../../src/assets/pro_4.jpg";
import pro_5 from "../../../../src/assets/pro_5.jpg";
import pro_6 from "../../../../src/assets/pro_6.jpg";
import pro_7 from "../../../../src/assets/pro_7.jpg";
import pro_8 from "../../../../src/assets/pro_8.jpg";
import pro_9 from "../../../../src/assets/pro_9.jpg";

const items = [
    {
        img: pro_1,
    },
    {
        img: pro_2,
    },
    {
        img: pro_3,
    },
    {
        img: pro_4,
    },
    {
        img: pro_5,
    },
    {
        img: pro_6,
    },
    {
        img: pro_7,
    },
    {
        img: pro_9,
    },
    {
        img: pro_4,
    },
    {
        img: pro_8,
    },
    {
        img: pro_9,
    },
    {
        img: pro_7,
    },
    {
        img: pro_5,
    },
    {
        img: pro_2,
    },
    {
        img: pro_3,
    },
    {
        img: pro_1,
    },
    {
        img: pro_3,
    },
    {
        img: pro_9,
    },
    {
        img: pro_7,
    },
    {
        img: pro_9,
    },
    {
        img: pro_4,
    },
    {
        img: pro_7,
    },
    {
        img: pro_2,
    },
    {
        img: pro_7,
    },
    {
        img: pro_8,
    },
    {
        img: pro_7,
    },
    {
        img: pro_5,
    },
    {
        img: pro_6,
    },
    {
        img: pro_1,
    },
    {
        img: pro_2,
    },
    {
        img: pro_9,
    },
    {
        img: pro_3,
    },
    {
        img: pro_4,
    },
    {
        img: pro_8,
    },
    {
        img: pro_9,
    },
    {
        img: pro_7,
    },
    {
        img: pro_1,
    },
    {
        img: pro_2,
    },
    {
        img: pro_6,
    },
    {
        img: pro_1,
    },
    {
        img: pro_3,
    },
    {
        img: pro_5,
    },
    {
        img: pro_7,
    },
    {
        img: pro_9,
    },
    {
        img: pro_4,
    },
    {
        img: pro_8,
    },
    {
        img: pro_2,
    },
    {
        img: pro_1,
    },
];

function Items({ currentItems }) {
    return (
        <>
            <div className="flex flex-wrap gap-[35px]">
                {currentItems &&
                    currentItems.map((item) => (
                        <Product
                            productImg={item.img}
                            tagInnerContent="New"
                            tagClassName="w-[92px] h-[35px]"
                        />
                    ))}
            </div>
        </>
    );
}

const Paginations = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;

    // console.log(`Loading items from ${itemOffset} to ${endOffset}`);

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //     `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className=" flex">
                <Items currentItems={currentItems} />
            </div>

            <div className="flex justify-between items-center">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel=""
                    renderOnZeroPageCount={null}
                    previousClassName="page-link hidden"
                    nextClassName="page-item hidden"
                    containerClassName="pagination flex gap-x-4"
                    pageLinkClassName="page-link w-9 h-9 border border-[#F0F0F0] text-color_1 inline-flex justify-center items-center"
                    activeClassName="active"
                    pageClassName="page-item "
                />
                <p className="text-color_1">
                    Products from {itemOffset + 1} to {endOffset} of{"  "}
                    {items.length}
                </p>
            </div>
        </>
    );
};

export default Paginations;
