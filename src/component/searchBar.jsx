import React from "react";
import { IoSearchSharp } from "react-icons/io5";
export default function SearchBar() {
  return (
    <div className="w-4/5 md:w-1/3  mx-auto">
      <div className="border-gradient text-white bg-transparent flex items-center justify-between">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search books"
          className="h-[30px] ms-3 outline-none border-none bg-transparent placeholder:text-white"
        />
        <span className="px-4 min-h-[40px] flex items-center justify-center cursor-pointer ">
          <IoSearchSharp />
        </span>
      </div>
{/* 
      <div>
        <div className="relative w-[50%] mx-auto md:w-60 bg-slate-500 min-w-[200px] overflow-hidden px-4 py-2 select-box  hover:overflow-visible text-center">
          <label htmlFor="select-category" className="px-4 py-2  text-white ">
            Select Category
          </label>
          <input
            type="checkbox"
            name="select-category"
            id="select-category"
            className="hidden"
          />

          <div className="absolute top-full left-0 flex items-center justify-center flex-col w-full z-50">
            <span className="py-1 cursor-pointer mt-1 text-white bg-slate-400 px-3 w-full h-10 flex items-center justify-center ">
              option 1
            </span>
            <span className="py-1 cursor-pointer mt-1 text-white bg-slate-400 px-3 w-full h-10 flex items-center justify-center">
              option 2
            </span>
            <span className="py-1 cursor-pointer mt-1 text-white bg-slate-400 px-3 w-full h-10 flex items-center justify-center">
              option 3
            </span>
            <span className="py-1 cursor-pointer mt-1 text-white bg-slate-400 px-3 w-full h-10 flex items-center justify-center">
              option 4
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
}
