import React from "react";
import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import Image from "../components/components-layer/Image";
import { useSelector } from "react-redux";

const Cart = () => {
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <div>
        <Container>
          <Bredcumd />
          <div>
            <div className="bg-[#F5F5F3] grid grid-cols-4 py-8 px-5 ">
              <h5>Product</h5>
              <h5>Price</h5>
              <h5>Quantity</h5>
              <h5>Total</h5>
            </div>
            <div>
              {count.map((item, index) => (
                <div key={index} className="grid grid-cols-4 py-8 px-5">
                  <div className="flex items-center gap-2">
                    <Image
                      src={item.thumbnail}
                      className="h-[85px] w-[85px] object-cover"
                    />
                    <p>{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {count.map((item) => {
                {
                  item.title;
                }
              })}
            </div>
            <div></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Cart;
