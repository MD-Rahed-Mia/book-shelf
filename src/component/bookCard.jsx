import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Loading from "./Loading";
export default function BookCard({ book, loading }) {
  return (
    <>
      {loading ? (
        <div className="shadow-lg min-w-48 min-h-[200px]">
          <Loading />
        </div>
      ) : (
        <>
          <div
            className="shadow-gradient max-w-[350px] w-[300px] min-h-44 grid grid-cols-2 p-2 mt-3 rounded-md border flex-shrink-0"
            data-aos="fade-up"
          >
            <div>
              <img
                src={book?.cover_image || "/images/bookIcon.png"}
                className="max-w-[120px]"
                alt="book card"
              />
            </div>
            <div>
              <ul className="flex items-center justify-center gap-2 mt-2 text-sm">
                <RatingBar rating={3} />
              </ul>
              <div className="text-center">
                <h1 className="text-[13px] mt-3 leading-5">
                  {book?.title || "books title here"}
                </h1>
                {/* <h1 className="text-[12px]">Sharloks home</h1> */}
              </div>
              <div>
                <h1 className="text-xl text-center text-blue-400">
                  {book?.price || "$ 0.00"}
                </h1>
                <button className="block mx-auto text-center border-2 border-blue-400 rounded-sm px-3 mt-3 py-1 hover:bg-blue-400 hover:text-white transition">
                  Buy now
                </button>
              </div>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}

//books rating bar
const RatingBar = ({ rating = 4 }) => {
  const ratingStar = [];

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      ratingStar.push(<FaStar className="text-yellow-400" />);
    } else {
      ratingStar.push(<FaRegStar className="text-gray-400" />);
    }
  }
  return (
    <>
      {ratingStar &&
        ratingStar.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
    </>
  );
};
