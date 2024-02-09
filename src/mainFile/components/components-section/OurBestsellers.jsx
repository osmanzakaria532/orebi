import React, { useEffect } from "react";
import ContainerFluid from "../components-layer/ContainerFluid";
import Container from "../components-layer/Container";
import Product from "../components-layer/Product";
import HeadingTag from "../components-layer/HeadingTag";
import axios from "axios";

// import obi_1 from "../../../../src/assets/b_1.jpg";
// import obi_2 from "../../../../src/assets/b_2.jpg";
// import obi_3 from "../../../../src/assets/b_3.jpg";
// import obi_4 from "../../../../src/assets/b_4.jpg";
import { useState } from "react";

const OurBestsellers = () => {
    let [allProduct, setAllProduct] = useState([
        // {
        //     id: 1,
        //     title: "iPhone 9",
        //     description: "An apple mobile which is nothing like apple",
        //     price: 549,
        //     discountPercentage: 12.96,
        //     rating: 4.69,
        //     stock: 94,
        //     brand: "Apple",
        //     category: "smartphones",
        //     thumbnail:
        //         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        //     images: [
        //         "https://cdn.dummyjson.com/product-images/1/1.jpg",
        //         "https://cdn.dummyjson.com/product-images/1/2.jpg",
        //         "https://cdn.dummyjson.com/product-images/1/3.jpg",
        //         "https://cdn.dummyjson.com/product-images/1/4.jpg",
        //         "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
        //     ],
        // },
    ]);
    useEffect(() => {
        let productApi = () => {
            axios.get("https://dummyjson.com/products").then((item) => {
                setAllProduct(item.data.products);
            });
        };
        productApi();
    }, []);

    return (
        <>
            <ContainerFluid>
                <Container className="pt-[118px] px-3">
                    <HeadingTag children="our bestsellers" />
                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
                        {allProduct.map(
                            (item) =>
                                item.id <= 4 && (
                                    <div className="">
                                        <Product
                                            productImg={item.images[0]}
                                            tagInnerContent="New"
                                            tagClassName="w-[92px] h-[35px]"
                                            productDetail={item.title}
                                            price={item.price}
                                            className=""
                                        />
                                    </div>
                                )
                        )}

                        {/* <div>
                            <Product
                                productImg={obi_2}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={obi_3}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={obi_4}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div> */}
                    </div>
                </Container>
            </ContainerFluid>
        </>
    );
};

export default OurBestsellers;
