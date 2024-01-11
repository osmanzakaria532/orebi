import React from "react";
import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import Image from "../components/components-layer/Image";

import { IoGrid } from "react-icons/io5";
import { FaAngleDown, FaPlus } from "react-icons/fa6";

import grid_1 from "../../../src/assets/Grid_1.svg";
import grid_2 from "../../../src/assets/Grid_2.svg";
import Product from "../components/components-layer/Product";

import pro_1 from "../../../src/assets/pro_1.jpg";
import pro_2 from "../../../src/assets/pro_2.jpg";
import pro_3 from "../../../src/assets/pro_3.jpg";
import pro_4 from "../../../src/assets/pro_4.jpg";
import pro_5 from "../../../src/assets/pro_5.jpg";
import pro_6 from "../../../src/assets/pro_6.jpg";
import pro_7 from "../../../src/assets/pro_7.jpg";
import pro_8 from "../../../src/assets/pro_8.jpg";
import pro_9 from "../../../src/assets/pro_9.jpg";

import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Products = () => {
    return (
        <>
            <div>
                <Container className="px-3">
                    <Bredcumd />
                    <div className="flex justify-between">
                        <div className="w-[370px]">
                            <div>
                                <h4 className="text-Primary_1 text-[20px] font-DM font-bold mb-[35px]">
                                    Shop by Category
                                </h4>
                                <p className="flex justify-between items-center border-b pb-[21px] text-Primary_2 mb-[20px]">
                                    Category 1 <FaPlus />
                                </p>
                                <p className="flex justify-between items-center border-b pb-[21px] text-Primary_2 mb-[20px]">
                                    Category 1 <FaPlus />
                                </p>
                            </div>
                        </div>
                        <div className="w-[1180px]">
                            <div className="flex justify-between items-center mb-[60px]">
                                <div className="flex gap-x-[20px]">
                                    <Image src={grid_1} className="!w-auto" />
                                    <Image src={grid_2} className="!w-auto" />
                                </div>
                                <div className="flex items-center gap-x-10">
                                    <div className="flex items-center">
                                        <label
                                            for="Featured"
                                            className="text-color_1 text-base font-DM leading-[30px] mr-[14px]">
                                            Sort by:
                                        </label>
                                        <div
                                            id="Featured"
                                            className="border py-[3px] px-[21px] flex justify-between items-center ">
                                            <div className="pr-[152px]">
                                                Featured
                                            </div>
                                            <div>
                                                <FaAngleDown />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <label
                                            for="Show"
                                            className="text-color_1 text-base font-DM leading-[30px] mr-[14px]">
                                            Show:
                                        </label>
                                        <div
                                            id="Show"
                                            className="border py-[3px] px-[21px] flex justify-between items-center ">
                                            <div className="pr-[98px]">36</div>
                                            <div>
                                                <FaAngleDown />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between flex-wrap gap-y-[50px]">
                                <div>
                                    <Product
                                        productImg={pro_1}
                                        tagInnerContent="New"
                                        tagClassName="w-[92px] h-[35px]"
                                    />
                                </div>
                                <div>
                                    <Product
                                        productImg={pro_2}
                                        tagInnerContent="-10%"
                                        tagClassName="w-[92px] h-[35px]"
                                    />
                                </div>
                                <div>
                                    <Product productImg={pro_3} />
                                </div>
                                <div>
                                    <Product productImg={pro_4} />
                                </div>
                                <div>
                                    <Product
                                        productImg={pro_5}
                                        tagInnerContent="New"
                                        tagClassName="w-[92px] h-[35px]"
                                    />
                                </div>
                                <div>
                                    <Product productImg={pro_6} />
                                </div>
                                <div>
                                    <Product
                                        productImg={pro_7}
                                        tagInnerContent="-10%"
                                        tagClassName="w-[92px] h-[35px]"
                                    />
                                </div>
                                <div>
                                    <Product
                                        productImg={pro_3}
                                        tagInnerContent="-15%"
                                        tagClassName="w-[92px] h-[35px]"
                                    />
                                </div>
                                <div>
                                    <Product
                                        productImg={pro_4}
                                        tagInnerContent="-10%"
                                        tagClassName="w-[92px] h-[35px]"
                                    />
                                </div>
                                <div>
                                    <Product productImg={pro_8} />
                                </div>
                                <div>
                                    <Product productImg={pro_9} />
                                </div>
                                <div>
                                    <Product productImg={pro_7} />
                                </div>
                            </div>
                            <div className="pagination mt-[50px]">
                                <Stack spacing={2}>
                                    <Pagination
                                        count={10}
                                        variant="outlined"
                                        shape="rounded"
                                        hidePrevButton
                                        hideNextButton
                                    />
                                </Stack>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Products;
