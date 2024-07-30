import React, { useState } from "react";
import Layout from "./layout";

import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function SignUp() {
  const [isPassVisible, setIsPassVisible] = useState(false);

  function makePassVisible() {
    setIsPassVisible(!isPassVisible);
  }
  return (
    <div>
      <Layout>
        <div className="w-[90%] min-h-[70vh] mx-auto grid place-content-center grid-cols-1 md:grid-cols-2">
          <div>
            <img src="/images/banner.jpeg" alt="banner" />
          </div>
          <div className="shadow-lg -shadow-lg p-4 loginBackground">
            <h1 className="text-2xl text-[#4f6d7a] font-bold text-center mt-8 uppercase">
              sign up
            </h1>
            <form action="" method="post" className=" mx-auto px-4 md:px-20">
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                />
              </div>
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                />
              </div>
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg flex items-center justify-between">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="password "
                  id="password"
                  placeholder="password"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                />
                <span
                  className="cursor-pointer text-[#bf5a36]"
                  onClick={makePassVisible}
                >
                  {isPassVisible ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg flex items-center justify-between">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="confirm password"
                  id="confirm password"
                  placeholder="confirm password"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                />
                <span
                  className="cursor-pointer text-[#bf5a36]"
                  onClick={makePassVisible}
                >
                  {isPassVisible ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div className="mt-4">
                <p className="text-[#4f6d7a] text-sm">
                  already have an account?{" "}
                  <span className="text-[#bf5a36] underline cursor-pointer">
                    <a href="/login">login now?</a>
                  </span>
                </p>
              </div>
              <div className="mt-12">
                <button
                  type="button"
                  className="px-10 block mx-auto mt-5 py-1 bg-[#bf5a36] text-white rounded-md outline-none border-none uppercase"
                >
                  sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </div>
  );
}
