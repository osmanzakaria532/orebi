import React from "react";
import ContainerFluid from "../components-layer/ContainerFluid";
import Container from "../components-layer/Container";
import Product from "../components-layer/Product";
import HeadingTag from "../components-layer/HeadingTag";

import obi_1 from "../../../../src/assets/b_1.jpg";
import obi_2 from "../../../../src/assets/b_2.jpg";
import obi_3 from "../../../../src/assets/b_3.jpg";
import obi_4 from "../../../../src/assets/b_4.jpg";

const OurBestsellers = () => {
    return (
        <>
            <ContainerFluid>
                <Container className="pt-[118px] px-3">
                    <HeadingTag children="our bestsellers" />
                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
                        <div>
                            <Product
                                productImg={obi_1}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
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
                        </div>
                    </div>
                </Container>
            </ContainerFluid>
        </>
    );
};

export default OurBestsellers;
