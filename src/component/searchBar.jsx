import React from "react";
import { IoSearchSharp } from "react-icons/io5";
export default function SearchBar() {
  return (
    <div className="w-[90%] md:w-[80%] mx-auto mt-5 flex items-center justify-between flex-wrap">
      <div className="flex items-center justify-between min-h-[40px] border-2  rounded-lg border-[#bf5a36] min-w-[250px] w-[80%] md:w-[30%] mx-auto">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search books"
          className="w-full h-full bg-none outline-none px-2"
        />
        <span className="px-4 bg-[#bf5a36] min-h-[40px] flex items-center justify-center text-white cursor-pointer ">
          <IoSearchSharp />
        </span>
      </div>

      <div className="flex items-center justify-center gap-3 flex-wrap  mx-auto mt-4 md:mt-0">
        <div>
          <select
            name="categories"
            id="categories"
            className="p-2 rounded-lg cursor-pointer bg-none text-[#bf5a36] px-3"
          >
            <option value="select value" defaultValue={true}>
              select categories
            </option>
            <option value="Action and adventure">Action and adventure</option>
            <option value="Classic">Classic</option>
            <option value="Crime">Crime</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="History">History</option>
            <option value="Romance">Romance</option>
          </select>
        </div>
        <div>
          <select
            name="types"
            id="types"
            className="p-2 rounded-lg cursor-pointer text-[#bf5a36] px-3 bg-none"
          >
            <option value="select type" defaultValue={true}>
              select type
            </option>
            <option value="bestSeller">best seller</option>
            <option value="topRated">top rated</option>
            <option value="newComing">new coming</option>
          </select>
        </div>
      </div>
    </div>
  );
}
