import React from "react";
import ContainerFluid from "../components-layer/ContainerFluid";
import Container from "../components-layer/Container";
import Image from "../components-layer/Image";

import ad_2 from "../../../../src/assets/Ads_2.jpg";

const Ads2 = () => {
    return (
        <>
            <ContainerFluid>
                <Container className="pt-10 md:pt-[130px] px-3">
                    <div>
                        <Image src={ad_2} />
                    </div>
                </Container>
            </ContainerFluid>
        </>
    );
};

export default Ads2;
