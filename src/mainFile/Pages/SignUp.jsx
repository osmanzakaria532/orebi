import React, { useState } from "react";
import Container from "../components/components-layer/Container";
import Bredcumd from "../components/components-layer/Bredcumd";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [firstName, setFirstName] = useState();
  let [lastName, setLastName] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [repeatPassword, setRepeatPassword] = useState();

  let [firstNameErr, setFirstNameErr] = useState();
  let [lastNameErr, setLastNameErr] = useState();
  let [emailErr, setEmailErr] = useState();
  let [passwordErr, setPasswordErr] = useState();
  let [repeatPasswordErr, setRepeatPasswordErr] = useState();

  let [registrationComplete, setRegistrationComplete] = useState();
  let [passwordShow, setPasswordShow] = useState(false);

  let [show, setShow] = useState();

  let handleFirstName = (element) => {
    setFirstName(element.target.value);
    setFirstNameErr();
  };

  let handleLastName = (element) => {
    setLastName(element.target.value);
    setLastNameErr();
  };

  let handleEmail = (element) => {
    setEmail(element.target.value);
    setEmailErr();
  };

  let handlePassword = (element) => {
    setPassword(element.target.value);
    setPasswordErr();
  };
  let handleRepeatPassword = (element) => {
    setRepeatPassword(element.target.value);
    setRepeatPasswordErr();
  };

  let handleSubmit = () => {
    if (!firstName) {
      setFirstNameErr("Enter your first name");
    }
    if (!lastName) {
      setLastNameErr("Enter your last name");
    }
    if (!email) {
      setEmailErr("Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
        setEmailErr("Invalid Email");
      }
    }
    if (!password) {
      setPasswordErr("Enter your password");
    }
    if (!repeatPassword) {
      setRepeatPasswordErr("Enter your repeat password");
    }
    if (
      firstName &&
      lastName &&
      email &&
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email) &&
      password &&
      repeatPassword
    ) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setRegistrationComplete("Registration Complete");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setRepeatPassword("");
          navigate("/login");
        })
        .catch((error) => {
          const errorCode = error.code;
          console.log(errorCode);
        });
    }
  };

  return (
    <>
      <div>
        <Container>
          <Bredcumd />
          <div className="border-b">
            <p className="w-[644px] mb-[62px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the.
            </p>
          </div>
          <div className="mt-[57px]">
            <h3 className="text-[39px] font-semibold mb-[42px]">
              Your Personal Details
            </h3>
            <form action="">
              <div className="flex flex-col gap-6">
                <div className="flex gap-[39px]">
                  <div className="flex flex-col gap-[10px] w-[508px] relative">
                    <label htmlFor="" className="text-semibold">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="First Name"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                      onChange={handleFirstName}
                      value={firstName}
                    />
                    <div className="absolute top-[80%] -translate-y-full right-0">
                      {firstNameErr}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] w-[508px] relative">
                    <label htmlFor="" className="text-semibold">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                      onChange={handleLastName}
                      value={lastName}
                    />
                    <div className="absolute top-[80%] -translate-y-full right-0">
                      {lastNameErr}
                    </div>
                  </div>
                </div>
                <div className="flex gap-[39px] mt-6">
                  <div className="flex flex-col gap-[10px] w-[508px] relative">
                    <label htmlFor="" className="text-semibold">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="company@domain.com"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                      onChange={handleEmail}
                      value={email}
                    />
                    <div className="absolute top-[80%] -translate-y-full right-0">
                      {emailErr}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] w-[508px]">
                    <label htmlFor="" className="text-semibold">
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
                    <label htmlFor="" className="text-semibold">
                      Address 1
                    </label>
                    <input
                      type="text"
                      placeholder="4279 Zboncak Port Suite 6212"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] w-[508px]">
                    <label htmlFor="" className="text-semibold">
                      Address 2
                    </label>
                    <input
                      type="text"
                      placeholder="--"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                    />
                  </div>
                </div>
                <div className="flex gap-[39px] mt-6">
                  <div className="flex flex-col gap-[10px] w-[508px]">
                    <label htmlFor="" className="text-semibold">
                      City
                    </label>
                    <input
                      type="text"
                      placeholder="Your city"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-[8px] w-[508px]">
                    <label htmlFor="" className="text-semibold">
                      Post Code
                    </label>
                    <input
                      type="text"
                      placeholder="05228"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                    />
                  </div>
                </div>
                <div className="flex gap-[39px] mt-6">
                  <div className="flex flex-col gap-[10px] w-[508px]">
                    <h6 htmlFor="" className="text-semibold">
                      Country
                    </h6>
                    <select
                      name=""
                      id=""
                      className="border-b pb-[17px] focus:outline-none"
                    >
                      <option value="">Please select</option>
                      <option value="">dhaka</option>
                      <option value="">ctg</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-[8px] w-[508px]">
                    <h6 htmlFor="" className="text-semibold">
                      Region/State
                    </h6>
                    <select
                      name=""
                      id=""
                      className="border-b pb-[17px] focus:outline-none"
                    >
                      <option value="">Please select</option>
                      <option value="">dhaka</option>
                      <option value="">ctg</option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-[57px] border-b pb-[70px]">
            <h3 className="text-[39px] font-semibold mb-[42px]">Password</h3>
            <form action="">
              <div>
                <div className="flex gap-[39px]">
                  <div className="flex flex-col gap-[10px] w-[508px] relative">
                    <label htmlFor="" className="text-semibold">
                      Password
                    </label>
                    <input
                      type={passwordShow ? "text" : "password"}
                      placeholder="Password"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                      onChange={handlePassword}
                      value={password}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-2">
                      {passwordShow ? (
                        <FaEye onClick={() => setPasswordShow(!passwordShow)} />
                      ) : (
                        <FaEyeSlash
                          onClick={() => setPasswordShow(!passwordShow)}
                        />
                      )}
                    </div>
                    <div className="absolute top-[80%] -translate-y-full right-0">
                      {passwordErr}
                    </div>
                  </div>
                  <div className="flex flex-col gap-[8px] w-[508px] relative">
                    <label htmlFor="" className="text-semibold">
                      Repeat Password
                    </label>
                    <input
                      type={passwordShow ? "text" : "password"}
                      placeholder="Repeat Password"
                      className="border-b pb-[17px] focus:outline-none placeholder:text-[#767676] placeholder:text-sm"
                      onChange={handleRepeatPassword}
                      value={repeatPassword}
                    />
                    <div className="absolute top-1/2 -translate-y-1/2 right-2">
                      {passwordShow ? (
                        <FaEye onClick={() => setPasswordShow(!passwordShow)} />
                      ) : (
                        <FaEyeSlash
                          onClick={() => setPasswordShow(!passwordShow)}
                        />
                      )}
                    </div>
                    <div className="absolute top-[80%] -translate-y-full right-0">
                      {repeatPasswordErr}
                    </div>
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
            <div className="flex gap-5">
              <Link
                to=""
                className="hover:text-white hover:bg-[#262626] py-4 px-[70px] transition-all duration-300 border border-[#262626] font-semibold inline-block"
                onClick={handleSubmit}
              >
                Sign Up
              </Link>
              <Link
                to="/login"
                className="hover:text-white hover:bg-[#262626] py-4 px-[70px] transition-all duration-300 border border-[#262626] font-semibold inline-block"
              >
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
