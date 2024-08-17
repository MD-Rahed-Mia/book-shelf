import React, { useContext, useEffect, useState } from "react";
import Layout from "./layout";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { signInUser } from "../firebase/AuthFirebase";
export default function Login() {
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [formData, setFormData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const Navigate = useNavigate();
  function makePassVisible() {
    setIsPassVisible(!isPassVisible);
  }

  function hanldeChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }

  async function handleLoginSubmit(event) {
    event.preventDefault();

    const { email, password } = formData;

    try {
      await signInUser(email, password);
      Navigate("/")
      window.location.reload();
    } catch (error) {
      throw new Error("failed to signin.");
    }
  }

  return (
    <>
      <Layout>
        <div className="w-[90%] min-h-[70vh] mx-auto grid place-content-center grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/images/banner.gif"
              alt="banner"
              className="max-w-[70%]"
            />
          </div>
          <div className="shadow-lg -shadow-lg p-4 loginBackground md:w-[80%] mx-auto ">
            <h1 className="text-2xl text-[#4f6d7a] font-bold text-center mt-8 uppercase">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Login
              </span>
            </h1>
            <form
              className="mx-auto px-3 md:px-10"
              onSubmit={handleLoginSubmit}
            >
              <div className="text-sm text-red-500">{errorMessage}</div>
              <div className="border shadow-sm p-2 w-full  border-[#bf5a36] mt-8 rounded-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                  onChange={hanldeChange}
                />
              </div>
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg flex items-center justify-between">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="password"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                  onChange={hanldeChange}
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
                  Don't have an account?{" "}
                  <span className="text-[#bf5a36] underline cursor-pointer">
                    <a href="/signup">create an account?</a>
                  </span>
                </p>
              </div>
              <div className="mt-12">
                <button
                  type="submit"
                  className="px-10 block mx-auto mt-5 py-1 bg-[#bf5a36] text-white rounded-md outline-none border-none uppercase"
                >
                  log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </Layout>
    </>
  );
}
