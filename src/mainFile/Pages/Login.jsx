import React from "react";
import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div>
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
                            Returning Customer
                        </h3>
                        <form action="">
                            <div className="flex gap-[39px]">
                                <div className="flex flex-col gap-[10px] w-[508px]">
                                    <label htmlFor="" className="text-semibold">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="company@domain.com"
                                        className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px] w-[508px]">
                                    <label htmlFor="" className="text-semibold">
                                        password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="............."
                                        className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-3xl"
                                    />
                                </div>
                            </div>
                            <div className="mt-[30px] pb-[70px] border-b">
                                <button className="hover:text-white hover:bg-[#262626] py-4 px-[85px] transition-all duration-300 border border-[#262626] font-semibold">
                                    Log in
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-col gap-[45px] mt-[58px]">
                        <h3 className="text-[39px] font-semibold mb-[42px]">
                            New Customer
                        </h3>
                        <p className="w-[644px] text-[#767676]">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the.
                        </p>
                        <div>
                            <Link
                                to="/signup"
                                className="hover:text-white hover:bg-[#262626] py-4 px-[70px] transition-all duration-300 border border-[#262626] font-semibold">
                                Continue
                            </Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Login;
