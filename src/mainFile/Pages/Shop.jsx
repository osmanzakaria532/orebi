import React, { useState } from "react";
import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import { FaPlus } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";

import Filter from "../components/components-layer/Filter";
import Paginations from "../../../src/mainFile/components/components-layer/Paginations";

const Shop = () => {
    const [showProduct, setShowProduct] = useState(12);

    const handleOnChange = (e) => {
        let showNumber = Number(e.target.value);
        setShowProduct(showNumber);
    };

    return (
        <>
            <div>
                <Container className="px-3">
                    <Bredcumd />
                    <div className="flex justify-between">
                        {/* left section */}
                        <div className="w-[370px]">
                            <div>
                                <div className="mb-[53px]">
                                    <h4 className="text-Primary_1 text-[20px] font-DM font-bold mb-[35px]">
                                        Shop by Category
                                    </h4>
                                    <ul>
                                        <Filter
                                            categoryName="Category 1"
                                            icon={
                                                <FaPlus className="cursor-pointer" />
                                            }
                                        />
                                        <Filter categoryName="Category 2" />
                                        <Filter
                                            categoryName="Category 3"
                                            icon={
                                                <FaPlus className="cursor-pointer" />
                                            }
                                        />
                                        <Filter categoryName="Category 4" />
                                        <Filter categoryName="Category 4" />
                                    </ul>
                                    <p></p>
                                </div>
                                <div className="mb-[53px]">
                                    <h4 className="text-Primary_1 text-[20px] font-DM font-bold mb-[35px] flex justify-between items-center">
                                        Shop by Color
                                        <FaCaretDown className="cursor-pointer" />
                                    </h4>
                                    <ul>
                                        <Filter
                                            categoryName="Color 1"
                                            className="pl-5 relative after:absolute after:content-[''] after:w-[11px] after:h-[11px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-black after:rounded-full"
                                        />
                                        <Filter
                                            categoryName="Color 2"
                                            className="pl-5 relative after:absolute after:content-[''] after:w-[11px] after:h-[11px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-[#FF8686] after:rounded-full"
                                        />
                                        <Filter
                                            categoryName="Color 3"
                                            className="pl-5 relative after:absolute after:content-[''] after:w-[11px] after:h-[11px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-[#7ED321] after:rounded-full"
                                        />
                                        <Filter
                                            categoryName="Color 4"
                                            className="pl-5 relative after:absolute after:content-[''] after:w-[11px] after:h-[11px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-[#B6B6B6] after:rounded-full"
                                        />
                                        <Filter
                                            categoryName="Color 5"
                                            className="pl-5 relative after:absolute after:content-[''] after:w-[11px] after:h-[11px] after:left-0 after:top-1/2 after:-translate-y-1/2 after:bg-[#15CBA5] after:rounded-full"
                                        />
                                    </ul>
                                    <p></p>
                                </div>
                                <div className="mb-[53px]">
                                    <h4 className="text-Primary_1 text-[20px] font-DM font-bold mb-[35px] flex justify-between items-center">
                                        Shop by Brand
                                        <FaCaretDown className="cursor-pointer" />
                                    </h4>
                                    <ul>
                                        <Filter categoryName="Brand 1" />
                                        <Filter categoryName="Brand 2" />
                                        <Filter categoryName="Brand 3" />
                                        <Filter categoryName="Brand 4" />
                                        <Filter categoryName="Brand 5" />
                                    </ul>
                                </div>
                                <div className="mb-[53px]">
                                    <h4 className="text-Primary_1 text-[20px] font-DM font-bold mb-[35px] flex justify-between items-center">
                                        Shop by Price
                                        <FaCaretDown className="cursor-pointer" />
                                    </h4>
                                    <ul>
                                        <Filter categoryName="$0.00 - $9.99" />
                                        <Filter categoryName="$0.00 - $9.99" />
                                        <Filter categoryName="$0.00 - $9.99" />
                                        <Filter categoryName="$0.00 - $9.99" />
                                        <Filter categoryName="$0.00 - $9.99" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* right section */}
                        <div className="w-[1180px]">
                            {/* top filter header */}
                            <div className="mb-[60px] flex justify-between">
                                <div className="flex items-center gap-5">
                                    <div className="w-9 h-9 bg-black hover:bg-white border border-transparent hover:border-[#F0F0F0] flex justify-center items-center cursor-pointer group">
                                        <IoGrid className="text-sm text-white group-hover:text-black" />
                                    </div>
                                    <div className="w-9 h-9 hover:bg-black border border-[#F0F0F0] hover:border-transparent flex justify-center items-center cursor-pointer group">
                                        <AiOutlineBars className="text-sm group-hover:text-white" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-10">
                                    <div className="flex items-center gap-[14px]">
                                        <p>Sort by:</p>
                                        <select name="" id="">
                                            <option value="Featured">
                                                Featured
                                            </option>
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-[14px]">
                                        <p>show:</p>
                                        <select
                                            onChange={handleOnChange}
                                            name=""
                                            id="">
                                            <option value="12">12</option>
                                            <option value="24">24</option>
                                            <option value="36">36</option>
                                            <option value="48">48</option>
                                            <option value="60">60</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <Paginations itemsPerPage={showProduct} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Shop;
