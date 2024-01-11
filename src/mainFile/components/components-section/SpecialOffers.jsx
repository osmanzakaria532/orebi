import React from "react";
import ContainerFluid from "../components-layer/ContainerFluid";
import Container from "../components-layer/Container";
import Product from "../components-layer/Product";
import HeadingTag from "../components-layer/HeadingTag";

import soi_1 from "../../../../src/assets/s_1.jpg";
import soi_2 from "../../../../src/assets/s_2.jpg";
import soi_3 from "../../../../src/assets/s_3.jpg";
import soi_4 from "../../../../src/assets/s_4.jpg";

const SpecialOffers = () => {
    return (
        <>
            <ContainerFluid>
                <Container className="pt-[118px] px-3">
                    <HeadingTag children="special offers" />
                    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between">
                        <div>
                            <Product
                                productImg={soi_1}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={soi_2}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={soi_3}
                                tagInnerContent="New"
                                tagClassName="w-[92px] h-[35px]"
                            />
                        </div>
                        <div>
                            <Product
                                productImg={soi_4}
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

export default SpecialOffers;
