import React, { useState } from "react";
import ReactPaginate from "react-paginate";

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
        tag: "new",
    },
    {
        img: pro_2,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_4,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_1,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "old",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_4,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_1,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "old",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_4,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_1,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "old",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "old",
    },
    {
        img: pro_4,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_6,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_3,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_7,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_6,
        tag: "old",
    },
    {
        img: pro_1,
        tag: "old",
    },
    {
        img: pro_3,
        tag: "old",
    },
    {
        img: pro_5,
        tag: "old",
    },
    {
        img: pro_7,
        tag: "old",
    },
    {
        img: pro_9,
        tag: "new",
    },
    {
        img: pro_4,
        tag: "new",
    },
    {
        img: pro_8,
        tag: "new",
    },
    {
        img: pro_2,
        tag: "new",
    },
    {
        img: pro_1,
        tag: "old",
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
                            tagInnerContent={item.tag}
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

    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <div className=" flex">
                <Items currentItems={currentItems} />
            </div>

            <div className="flex justify-center sm:justify-between  items-center flex-wrap">
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
                    containerClassName="pagination flex gap-4 flex-wrap"
                    pageLinkClassName="page-link w-9 h-9 border border-[#F0F0F0] text-color_1 inline-flex justify-center items-center"
                    activeClassName="active"
                    pageClassName="page-item "
                />
                <p className="text-color_1">
                    Products from {itemOffset + 1} to
                    {endOffset > items.length ? items.length : endOffset} of
                    {items.length}
                </p>
            </div>
        </>
    );
};

export default Paginations;
