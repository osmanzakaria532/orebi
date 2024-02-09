import React, { useEffect, useState } from "react";
import Container from "../components/components-layer/Container";
import { useParams } from "react-router-dom";
import axios from "axios";
import Bredcumd from "../components/components-layer/Bredcumd";
import Image from "../components/components-layer/Image";

const ProductInsideDetails = () => {
    let { pId } = useParams();
    let [oneProduct, setOneProduct] = useState({});
    useEffect(() => {
        let productApi = () => {
            axios.get(`https://dummyjson.com/products/${pId}`).then((item) => {
                setOneProduct(item.data);
            });
        };
        productApi();
    }, []);
    return (
        <>
            <div>
                <Container>
                    <Bredcumd />
                    {oneProduct.id}
                    {console.log(oneProduct)}
                    <div></div>
                </Container>
            </div>
        </>
    );
};

export default ProductInsideDetails;
