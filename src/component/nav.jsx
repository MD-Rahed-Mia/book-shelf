import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }
  return (
    <div className="flex items-center justify-between px-3 py-2">
      <div>
        <h1 className="text-[20px] md:text-[50px] font-bold curp">
          <a href="/">Book shelf</a>
        </h1>
      </div>
      <div>
        <div className="md:hidden cursor-pointer text-2xl" onClick={handleMenu}>
          <AiOutlineMenu />
        </div>
        <ul
          className={
            "absolute top-20 right-5 min-w-[200px] p-2 bg-white rounded items-center justify-center gap-3 flex-col md:flex-row hidden md:flex"
          }
          id="menu"
          style={{
            display: menu ? "flex" : "",
          }}
        >
          <li className="cursor-pointer px-[20px] ">
            <a href="#">Home</a>
          </li>
          <li className="cursor-pointer px-[20px] ">
            <a href="/market-place">Market place</a>
          </li>
          <li className="cursor-pointer px-[20px] ">
            <a href="">Contact us</a>
          </li>
          <li className="cursor-pointer px-[20px] ">
            <a href="">About us</a>
          </li>
          <li className="cursor-pointer  bg-[#4e6c79] py-2 px-6  text-white rounded">
            <a href="/login" className="w-full h-full inline-block">
              login
            </a>
          </li>
          <li className="cursor-pointer  bg-[#f2cb9e] py-2 px-6 rounded">
            <a href="/signup">sign up</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
