import React from "react";
import Container from "../components-layer/Container";
import Flex from "../components-layer/Flex";
import Image from "../components-layer/Image";

import ad_1 from "../../../../src/assets/Ad_1.jpg";
import ad_2 from "../../../../src/assets/Ad_2.jpg";
import ad_3 from "../../../../src/assets/Ad_3.jpg";

const Ads = () => {
    return (
        <>
            <Container className="md:pt-[140px] md:pb-[128px] py-[30px] px-3 ">
                <Flex className="gap-x-5 md:gap-x-10">
                    <div>
                        <a>
                            <Image src={ad_1} />
                        </a>
                    </div>
                    <Flex className="flex-col justify-between">
                        <a>
                            <Image src={ad_2} />
                        </a>
                        <a>
                            <Image src={ad_3} />
                        </a>
                    </Flex>
                </Flex>
            </Container>
        </>
    );
};

export default Ads;
