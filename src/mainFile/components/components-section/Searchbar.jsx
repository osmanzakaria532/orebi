import { FaUser, FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsFillCaretDownFill } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import { HiSearch } from "react-icons/hi";
import { useEffect } from "react";

import LiItem from "../components-layer/LiItem";
import Image from "../components-layer/Image";
import Flex from "../components-layer/Flex";
import List from "../components-layer/List";
import SubCategory from "../components-layer/SubCategory";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Searchbar = () => {
  useEffect(() => {
    // This function for category menu
    function categoryToggle() {
      let categoryMenu = document.querySelector(".categoryMenu");
      categoryMenu.classList.toggle("show");
    }

    let categoryBtn = document.querySelector(".categoryBtn");
    categoryBtn.addEventListener("click", () => {
      categoryToggle();
    });

    // This function for user menu
    function userToggle() {
      let userAccount = document.querySelector(".userAccount");
      userAccount.classList.toggle("show");
    }

    let userBtn = document.querySelector(".userBtn");
    userBtn.addEventListener("click", () => {
      userToggle();
    });

    // This function for user menu
    function shoppingToggle() {
      let shoppingCart = document.querySelector(".shoppingCart");
      shoppingCart.classList.toggle("show");
    }

    let shopBtn = document.querySelector(".shopBtn");
    shopBtn.addEventListener("click", () => {
      shoppingToggle();
    });

    return () => {
      // This return for category menu
      let categoryBtn = document.querySelector(".categoryBtn");
      categoryBtn.addEventListener("click", () => {
        categoryToggle();
      });

      // This return for user menu
      let userBtn = document.querySelector(".userBtn");
      userBtn.addEventListener("click", () => {
        userToggle();
      });

      // This return for shopping cart
      let shopBtn = document.querySelector(".shopBtn");
      shopBtn.addEventListener("click", () => {
        shoppingToggle();
      });
    };
  });
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="bg-[#F5F5F3] pt-3 md:py-6 border-0 md:border border-[#979797]">
      <div className="md:max-w-container mx-auto flex items-center justify-between flex-wrap md:flex-nowrap pb-3 md:pb-0">
        {/* Category Part */}
        <Flex className="order-2 md:order-1 relative h-6 md:h-auto">
          <Flex className="items-center gap-x-[10px] cursor-pointer categoryBtn">
            <div className="pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="10"
                viewBox="0 0 19 10"
                fill="none"
              >
                <path
                  d="M0.653061 2.93878H17.6327C17.9933 2.93878 18.2857 2.64641 18.2857 2.28571V0.653061C18.2857 0.292367 17.9933 0 17.6327 0H0.653061C0.292367 0 0 0.292367 0 0.653061V2.28571C0 2.64641 0.292367 2.93878 0.653061 2.93878Z"
                  fill="#262626"
                />
                <path
                  d="M0.5 9.46929H13.5C13.7762 9.46929 14 9.17693 14 8.81623V7.18358C14 6.82288 13.7762 6.53052 13.5 6.53052H0.5C0.223844 6.53052 0 6.82288 0 7.18358V8.81623C0 9.17693 0.223844 9.46929 0.5 9.46929Z"
                  fill="#262626"
                />
              </svg>
            </div>
            <div className="font-DM text-sm">Shop by Category</div>
          </Flex>

          {/* Category menu */}
          <div className="w-[263px] opacity-0 invisible absolute left-0 top-full translate-y-3  md:translate-y-6 categoryMenu z-50">
            <List className="flex-col">
              <LiItem
                liClassName="bg-[#262626] border-b border-[#2D2D2D] relative group"
                liInnerContent="Accesories"
                className="flex items-center justify-between py-4 px-5 text-[rgba(255,255,255,0.7)] font-normal hover:font-bold hover:text-[#fff] md:hover:ml-[10px] relative "
              >
                <MdKeyboardArrowRight className="absolute right-5 top-4 md:top-1/2 md:translate-y-[-50%] font-bold text-white" />
                <SubCategory className="md:absolute left-full top-0 bg-white md:opacity-0 md:invisible md:group-hover:opacity-100 md:group-hover:visible transition-all ease-in-out duration-700 flex-wrap md:flex-nowrap hidden group-hover:flex ml-4 md:ml-0" />
              </LiItem>
              <LiItem
                liClassName="bg-[#262626] border-b border-[#2D2D2D]"
                liInnerContent="Furniture"
                className="py-4 px-5 text-[rgba(255,255,255,0.7)] font-normal hover:font-bold hover:text-[#fff] md:hover:ml-[10px]"
              />
              <LiItem
                liClassName="bg-[#262626] border-b border-[#2D2D2D]"
                liInnerContent="Electronics"
                className="py-4 px-5 text-[rgba(255,255,255,0.7)] font-normal hover:font-bold hover:text-[#fff] md:hover:ml-[10px]"
              />
              <LiItem
                liClassName="bg-[#262626] border-b border-[#2D2D2D]"
                liInnerContent="Clothes"
                className="py-4 px-5 text-[rgba(255,255,255,0.7)] font-normal hover:font-bold hover:text-[#fff] md:hover:ml-[10px]"
              />
              <LiItem
                liClassName="bg-[#262626] border-b border-[#2D2D2D]"
                liInnerContent="Bags"
                className="py-4 px-5 text-[rgba(255,255,255,0.7)] font-normal hover:font-bold hover:text-[#fff] md:hover:ml-[10px]"
              />
              <LiItem
                liClassName="bg-[#262626] border-b border-[#2D2D2D]"
                liInnerContent="Home appliances"
                className="py-4 px-5 text-[rgba(255,255,255,0.7)] font-normal hover:font-bold hover:text-[#fff] md:hover:ml-[10px]"
              />
            </List>
          </div>
        </Flex>

        {/* Search Part */}
        <div className="relative w-full px-3 md:px-0 md:w-auto order-1 mb-4 md:mb-0">
          <input
            className="bg-white w-full lg:w-[601px] py-4 px-6 pr-9 outline-0 placeholder:text-sm placeholder:text-[#C4C4C4] border-b-[1px] md:border-b-0 border-[#979797]"
            placeholder="Search Products"
            type="search"
          />
          <HiSearch className="text-base absolute right-4 top-1/2 translate-y-[-50%]" />
        </div>

        {/* User Part */}
        <Flex className="gap-x-5 md:gap-x-10 order-3 md:pr-3 h-6 md:h-auto items-center">
          <Flex className="relative">
            <Flex className="gap-x-[5px] md:gap-x-[10px] items-center cursor-pointer userBtn">
              <FaUser />
              <BsFillCaretDownFill className="text-[12px] md:text-sm" />
            </Flex>
            {/* User Account Menu */}
            <div>
              <List className="w-[200px] userAccount opacity-0 invisible absolute right-0 top-full translate-y-3 md:translate-y-4 flex-col z-50">
                <LiItem
                  liInnerContent="My Account"
                  className="py-4 text-center bg-[#2B2B2B] text-white hover:bg-white hover:text-[#2B2B2B] border border-transparent hover:border-[#F0F0F0]"
                  href="/myaccount"
                />
                <LiItem
                  liInnerContent="Log Out"
                  className="py-4 text-center bg-[#2B2B2B] text-white hover:bg-white hover:text-[#2B2B2B] border border-transparent hover:border-[#F0F0F0]"
                  href="/login"
                />
              </List>
            </div>
          </Flex>
          {/* Shopping Card Part */}
          <div className="relative ">
            {/* Card Btn */}
            <div className="pr-3 md:pr-0">
              <FaShoppingCart className="shopBtn cursor-pointer" />
            </div>
            {/* Card Overview */}
            <Flex className="shoppingCart opacity-0 invisible absolute top-full translate-y-3 md:translate-y-4 right-0 w-[360px] z-10 flex-col border border-[#F0F0F0]">
              <Flex className="bg-[#F5F5F3] p-4 justify-between items-center">
                <Flex className="gap-x-5 items-center">
                  {/* <Image src="../src/assets/card_img.jpg" /> */}
                  <div>
                    <ul className="flex flex-col gap-5">
                      {count.map((item, index) => (
                        <>
                          <div key={index} className="flex gap-3 items-center">
                            <div>
                              <Image
                                src={item.thumbnail}
                                className="h-[85px] w-[85px] object-cover"
                              />
                            </div>
                            <div>
                              <p>{item.title}</p>
                              <p>
                                {"P " + item.countt} {"$ " + item.price}
                              </p>
                            </div>
                          </div>
                          <div className="mb-[13px]">
                            <p className="text-[#767676]">
                              <span className="text-[#262626] font-bold">
                                Subtotal: {"$ " + item.countt * item.price}
                              </span>
                            </p>
                          </div>
                        </>
                      ))}
                    </ul>
                    {/* <h4 className="text-[#262626] font-bold">
                      Black Smart Watch
                    </h4>
                    <p className="text-[#262626] font-bold">$44.00</p> */}
                  </div>
                </Flex>
                <RiCloseLine />
              </Flex>
              <Flex className="p-5 flex-col bg-white">
                <Flex className="gap-x-5">
                  <Link to="/cart">
                    <div className="py-4 w-[148px] text-center font-bold border border-[#262626] bg-[#262626] hover:bg-white text-white hover:text-[#262626] cursor-pointer">
                      View Cart
                    </div>
                  </Link>
                  <Link to="/checkout">
                    <div className="py-4 w-[148px] text-center font-bold border border-[#262626] bg-[#262626] hover:bg-white text-white hover:text-[#262626] cursor-pointer">
                      Checkout
                    </div>
                  </Link>
                </Flex>
              </Flex>
            </Flex>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default Searchbar;
