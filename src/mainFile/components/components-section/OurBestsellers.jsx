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
import { Link, useParams } from "react-router-dom";

const OurBestsellers = () => {
  let { pId } = useParams();
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
              (item, index) =>
                item.id <= 4 && (
                  //   <Link to={`/productinsidedetails/${item.id}`}>
                  <Product
                    key={index}
                    ForAdToCard={item}
                    productImg={item.thumbnail}
                    tagInnerContent="New"
                    tagClassName="w-[92px] h-[35px]"
                    productDetail={item.title}
                    price={item.price}
                  />
                  //   </Link>
                )
            )}
          </div>
        </Container>
      </ContainerFluid>
    </>
  );
};

export default OurBestsellers;
