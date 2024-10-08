import React, { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IsLoggedIn } from "../AuthContext/IsLoggedIn";
import { RxCross1 } from "react-icons/rx";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const [miniMenu, setMiniMenu] = useState(false);
  const { getUser } = useContext(IsLoggedIn);

  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <div className="flex  items-center justify-between px-3 py-2 lg:w-4/5 mx-auto sticky top-0 left-0 bg-white z-50">
      <div>
        <h1 className="text-[20px] md:text-[50px] font-bold curp">
          <a href="/">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Book Shelf
            </span>
          </a>
        </h1>
      </div>
      <div>
        <div
          className="md:hidden cursor-pointer text-4xl hover:scale-125 transition"
          onClick={handleMenu}
        >
          {menu ? <RxCross1 /> : <AiOutlineMenu />}
        </div>
        <ul
          className={
            "absolute top-12 border md:top-0 md:static right-5 min-w-[200px] p-2 bg-white rounded items-center justify-center gap-3 flex-col md:flex-row hidden md:flex shadow-md md:shadow-none z-50"
          }
          id="menu"
          style={{
            display: menu ? "flex" : "",
          }}
        >
          <li className="cursor-pointer px-[20px] hover:text-blue-700 transition font-bold">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer px-[20px] hover:text-blue-700 transition font-bold ">
            <a href="/market-place">Market place</a>
          </li>
          <li className="cursor-pointer px-[20px] hover:text-blue-700 transition font-bold ">
            <a href="">Contact us</a>
          </li>
          <li className="cursor-pointer px-[20px] hover:text-blue-700 transition font-bold ">
            <a href="">About us</a>
          </li>

          {getUser.email == undefined ? (
            ""
          ) : (
            <>
              <li className="md:hidden cursor-pointer font-bold">
                <a href="/profile">Profile</a>
              </li>
              <li
                className="md:hidden cursor-pointer font-bold"
                onClick={() => {
                  localStorage.removeItem("user");
                  window.location.reload();
                }}
              >
                Log out
              </li>
            </>
          )}

          {getUser.email == undefined ? (
            <>
              <li className="cursor-pointer  bg-[#4e6c79] py-2 px-6  hover:text-blue-400 transition font-bold text-white rounded">
                <a href="/login" className="w-full h-full inline-block">
                  login
                </a>
              </li>
              <li className="cursor-pointer  bg-blue-400 text-white py-2 px-6  hover:text-white transition font-bold rounded">
                <a href="/signup">sign up</a>
              </li>
            </>
          ) : (
            <li className="cursor-pointer py-2 px-6 hover:text-blue-400 transition font-bold relative">
              <img
                src="/images/profile.jpg"
                alt="profile"
                className="w-8 h-8 rounded-full hidden md:block"
                onClick={() => setMiniMenu(!miniMenu)}
              />

              {miniMenu ? (
                <div className="absolute top-full left-1/2 -translate-x-1/2  md:right-4 shadow px-3 py-4 min-w-40  bg-white rounded-md hidden md:block z-50">
                  <ul>
                    <li className="mt-3 cursor-pointer  hover:text-orange-700 transition font-bold">
                      <a href="/profile">Profile</a>
                    </li>
                    <li
                      className="mt-3 cursor-pointer  hover:text-orange-700 transition font-bold"
                      onClick={() => {
                        localStorage.removeItem("user");
                        window.location.reload();
                      }}
                    >
                      Log out
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
