import React from "react";
import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import { Link } from "react-router-dom";

const SignUp = () => {
    return (
        <>
            <div>
                <Container>
                    <Bredcumd />
                    <div className="border-b">
                        <p className="w-[644px] mb-[62px]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the.
                        </p>
                    </div>
                    <div className="mt-[57px]">
                        <h3 className="text-[39px] font-semibold mb-[42px]">
                            Your Personal Details
                        </h3>
                        <form action="">
                            <div>
                                <div className="flex gap-[39px]">
                                    <div className="flex flex-col gap-[10px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[8px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Last Name
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Last Name"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-[39px] mt-6">
                                    <div className="flex flex-col gap-[10px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Email address
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="company@domain.com"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[8px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Telephone
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your phone here"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-[57px] border-b pb-[70px]">
                        <h3 className="text-[39px] font-semibold mb-[42px]">
                            New Customer
                        </h3>
                        <form action="">
                            <div>
                                <div className="flex gap-[39px]">
                                    <div className="flex flex-col gap-[10px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Address 1
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="4279 Zboncak Port Suite 6212"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[8px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Address 2
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="--"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-[39px] mt-6">
                                    <div className="flex flex-col gap-[10px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Your city"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[8px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Post Code
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="05228"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className="flex gap-[39px] mt-6">
                                    <div className="flex flex-col gap-[10px] w-[508px]">
                                        <h6
                                            htmlFor=""
                                            className="text-semibold">
                                            Country
                                        </h6>
                                        <select
                                            name=""
                                            id=""
                                            className="border-b pb-[17px] focus:outline-none">
                                            <option value="">
                                                Please select
                                            </option>
                                            <option value="">dhaka</option>
                                            <option value="">ctg</option>
                                        </select>
                                    </div>
                                    <div className="flex flex-col gap-[8px] w-[508px]">
                                        <h6
                                            htmlFor=""
                                            className="text-semibold">
                                            Region/State
                                        </h6>
                                        <select
                                            name=""
                                            id=""
                                            className="border-b pb-[17px] focus:outline-none">
                                            <option value="">
                                                Please select
                                            </option>
                                            <option value="">dhaka</option>
                                            <option value="">ctg</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-[57px] border-b pb-[70px]">
                        <h3 className="text-[39px] font-semibold mb-[42px]">
                            Password
                        </h3>
                        <form action="">
                            <div>
                                <div className="flex gap-[39px]">
                                    <div className="flex flex-col gap-[10px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-[8px] w-[508px]">
                                        <label
                                            htmlFor=""
                                            className="text-semibold">
                                            Repeat Password
                                        </label>
                                        <input
                                            type="password"
                                            placeholder="Repeat Password"
                                            className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col gap-6 mt-[58px]">
                        <div className="flex items-center gap-[15px]">
                            <input type="checkbox" />
                            <p>I have read and agree to the Privacy Policy</p>
                        </div>
                        <div className="flex items-center gap-[15px]">
                            <p>Subscribe Newsletter</p>
                            <div className="flex items-center gap-[15px]">
                                <input type="radio" name="yn" />
                                <span>Yas</span>
                            </div>
                            <div className="flex items-center gap-[15px]">
                                <input type="radio" name="yn" />
                                <span>No</span>
                            </div>
                        </div>
                        <div>
                            <Link
                                to="/login"
                                className="hover:text-white hover:bg-[#262626] py-4 px-[70px] transition-all duration-300 border border-[#262626] font-semibold inline-block">
                                Log in
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default SignUp;
