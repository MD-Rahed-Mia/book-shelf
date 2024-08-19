import React, { useState } from "react";
import Layout from "./layout";

import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { signUpUser } from "../firebase/AuthFirebase";
import { Commet } from "react-loading-indicators";
import { setUpUser } from "../firebase/DatabaseFirebase";

export default function SignUp() {
  const [message, setMessage] = useState(null);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [formData, setFormData] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  //handle error
  const [error, setError] = useState(null);

  function makePassVisible() {
    setIsPassVisible(!isPassVisible);
  }

  function handleSignUpForm(event) {
    event.preventDefault();
    const { password, confirmPassword, email, name } = formData;
    let passError = "";
    setMessage("request send");

    if (password.length < 6) {
      passError = "minimum required 6 digits and more.";
    } else if (password !== confirmPassword) {
      passError = "password is not match.";
    }

    if (passError) {
      setPasswordError(passError);
    } else {
      setPasswordError("");

      try {
        signUpUser(email, password).then((res) => {
          if (res.error == "auth/email-already-in-use") {
            setError("email already register.");
          } else {
            setUpUser(name, email, "", "");
            setError(null);
          }
          setMessage(null);
        });
      } catch (error) {
        throw new Error("something went wrong");
      }
    }
  }

  function onChangeSignUpForm(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  }

  function handlePassword(e) {
    // setPassword(e.target.value);
  }

  function handleConfirmPassword(e) {
    // setConfirmPassword(e.target.value);
  }
  return (
    <div>
      <Layout>
        <div className="w-[90%] min-h-[70vh] mx-auto grid place-content-center grid-cols-1 md:grid-cols-2">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src="/images/banner.gif"
              alt="banner"
              className="max-w-[70%]"
            />
          </div>
          <div className="shadow-lg -shadow-lg p-4 loginBackground md:w-[80%] mx-auto">
            <div>{error && <h1 className="text-red-500">{error}</h1>}</div>

            <h1 className="text-2xl text-[#4f6d7a] font-bold text-center mt-8 uppercase">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Sign up
              </span>
            </h1>

            <h1>
              {message && (
                <div className="w-3/4 mx-auto mt-3 text-center">
                  <Commet color="#01f4ed" size="small" text="" textColor="" />
                </div>
              )}
            </h1>
            <form
              className=" mx-auto px-4 md:px-10"
              onSubmit={handleSignUpForm}
            >
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                  onChange={onChangeSignUpForm}
                  required
                />
              </div>
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="email"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                  onChange={onChangeSignUpForm}
                  required
                />
              </div>
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg flex items-center justify-between">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="password"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                  onChange={(e) => {
                    onChangeSignUpForm(e);
                    handlePassword(e);
                  }}
                />
                <span
                  className="cursor-pointer text-[#bf5a36]"
                  onClick={makePassVisible}
                >
                  {isPassVisible ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </div>

              <div>
                <p className="text-red-700 text-sm">{passwordError}</p>
              </div>
              <div className="border shadow-sm p-2 w-full border-[#bf5a36] mt-8 rounded-lg flex items-center justify-between">
                <input
                  type={isPassVisible ? "text" : "password"}
                  name="confirmPassword"
                  id="confirm password"
                  placeholder="confirm password"
                  className="w-full h-full outline-none border-none placeholder:text-[#bf5a36] text-sm bg-transparent"
                  onChange={(e) => {
                    onChangeSignUpForm(e);
                    handleConfirmPassword(e);
                  }}
                />
                <span
                  className="cursor-pointer text-[#bf5a36]"
                  onClick={makePassVisible}
                >
                  {isPassVisible ? <FaRegEye /> : <FaEyeSlash />}
                </span>
              </div>
              <div>
                <p className="text-red-700 text-sm">{passwordError}</p>
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
                  type="submit"
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
