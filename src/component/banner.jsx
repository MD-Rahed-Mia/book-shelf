import React from "react";

export default function Banner() {
  return (
    <div className="w-full min-h-[500px] pt-20" data-aos="zoom-in">
      <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-7xl text-center leading-1 new-amsterdam-regular capitalize">
        No One ever Became <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-red-500">
          bankrupt for reading books
        </span>
      </h1>
      <h1 className="text-center mt-3 text-lg px-4 md:text-2xl md:px-0">
        Reads books, Improve your knowledge, Sharp your skills.
      </h1>

      <div className="flex items-center justify-center gap-3 mt-16">
        <button className="px-6 md:px-6 text-sm py-2 md:text-md border-2 hover:bg-violet-700 transition hover:text-white border-violet-700 rounded-full cursor-pointer ">
          Read more
        </button>
        <button className="px-6 text-sm md:px-6  py-2 md:text-md border-2 bg-gradient-to-r text-white from-fuchsia-500 to-pink-500 rounded-full cursor-pointer ">
          Sign up now
        </button>
      </div>
    </div>
  );
}
